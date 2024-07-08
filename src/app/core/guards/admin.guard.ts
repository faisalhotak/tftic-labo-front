import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ROLES } from '../constants/roles';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  canActivate(): boolean {
    if (this._authService.currentUser?.roles.includes(ROLES.ADMIN)) {
      return true;
    }

    this._router.navigate(['/']).then();

    return false;
  }
}
