import { inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly _authService: AuthService = inject(AuthService);

  constructor() {}

  canActivate(): Observable<boolean> {
    return this._authService.isLoggedIn$;
  }
}
