import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  constructor() {}

  canActivate(): boolean {
    if (this._authService.currentUser) {
      this._router.navigate(['/']).then();

      return false;
    }

    return true;
  }
}
