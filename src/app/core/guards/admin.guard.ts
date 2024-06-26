import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ROLES } from '../constants/roles';
import { map, Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  private readonly _authService: AuthService = inject(AuthService);

  constructor() {}

  canActivate(): Observable<boolean> {
    return this._authService.currentUser$.pipe(
      map((auth) => auth?.roles.includes(ROLES.ADMIN) || false),
    );
  }
}
