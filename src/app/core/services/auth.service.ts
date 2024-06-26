import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { IAuth } from '../../features/auth/models/auth.model';
import { ILoginForm } from '../../features/auth/forms/login.form';
import { ENDPOINTS } from '../constants/endpoints';
import { environment } from '../../../environments/environment';

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

  get currentUser(): IAuth | null {
    return this._currentUser$.value;
  }

  get isLoggedIn$(): Observable<boolean> {
    return this._currentUser$.pipe(map((auth) => !!auth));
  }

  get token(): string | null {
    return this.currentUser?.accessToken || null;
  }

  set currentUser(auth: IAuth | null) {
    if (auth) {
      this._cookieService.set('user', btoa(JSON.stringify(auth)));
    } else {
      this._cookieService.delete('user');
    }

    this._currentUser$.next(auth);
  }

  login(form: ILoginForm) {
    return this._httpClient
      .post<IAuth>(`${environment.baseUrl}${ENDPOINTS.LOGIN}`, form)
      .pipe(tap((auth) => (this.currentUser = auth)));
  }

  logout() {
    this.currentUser = null;
  }

  loadUser() {
    const userCookie = this._cookieService.get('user');

    if (userCookie) {
      this.currentUser = JSON.parse(atob(userCookie));
    }
  }
}
