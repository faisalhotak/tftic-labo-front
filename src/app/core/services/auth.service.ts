import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from './cookie.service';
import { IAuth } from '../../features/auth/models/auth.model';
import { ILoginForm } from '../../features/auth/forms/login.form';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  IRegisterForm,
  IRegisterSeekerForm,
} from '../../features/auth/forms/register.form';
import { UserType } from '../../features/auth/pages/register/register.component';
import { COMMON } from '../constants/common';
import { ROLES } from '../constants/roles';

@Injectable()
export class AuthService {
  private _currentUser$ = new BehaviorSubject<IAuth | null>(null);

  constructor(
    private readonly _cookieService: CookieService,
    private readonly _httpClient: HttpClient,
  ) {
    this.loadUser();
  }

  get currentUser$(): Observable<IAuth | null> {
    return this._currentUser$.asObservable();
  }

  getCurrentUserRoles(): string[] {
    return this.currentUser?.roles || [];
  }

  get isSeeker(): boolean {
    return this.getCurrentUserRoles().includes(ROLES.SEEKER);
  }

  get isAdvertiser(): boolean {
    return this.getCurrentUserRoles().includes(ROLES.ADVERTISER);
  }

  get currentUser(): IAuth | null {
    return this._currentUser$.value;
  }

  get userId(): number | null {
    return this.currentUser?.user.id || null;
  }

  get isLoggedIn$(): Observable<boolean> {
    return this._currentUser$.pipe(map((auth) => !!auth));
  }

  get isAdvertiser$(): Observable<boolean> {
    return this._currentUser$.pipe(
      map((auth) => !!auth?.roles.includes(ROLES.ADVERTISER)),
    );
  }

  get isSeeker$(): Observable<boolean> {
    return this._currentUser$.pipe(
      map((auth) => !!auth?.roles.includes(ROLES.SEEKER)),
    );
  }

  get token(): string | null {
    return this.currentUser?.accessToken || null;
  }

  set currentUser(auth: IAuth | null) {
    if (auth) {
      this._cookieService.set(
        COMMON.user.cookieName,
        btoa(JSON.stringify(auth)),
      );
    } else {
      this._cookieService.delete(COMMON.user.cookieName);
    }

    this._currentUser$.next(auth);
  }

  login(form: ILoginForm) {
    return this._httpClient
      .post<IAuth>(`${API_ENDPOINTS.login}`, form)
      .pipe(tap((auth) => (this.currentUser = auth)));
  }

  registerUser(form: IRegisterForm | IRegisterSeekerForm, userType: UserType) {
    return this._httpClient
      .post<IAuth>(`${API_ENDPOINTS.register[userType]}`, form)
      .pipe(tap((auth) => (this.currentUser = auth)));
  }

  logout() {
    this.currentUser = null;
  }

  loadUser() {
    const userCookie = this._cookieService.get(COMMON.user.cookieName);

    if (userCookie) {
      this.currentUser = JSON.parse(atob(userCookie));
    }
  }
}
