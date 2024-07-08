import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  canActivate(): boolean {
    if (this._authService.currentUser) {
      return true;
    }

    this._router.navigate(['/']).then();

    return true;
  }
}
