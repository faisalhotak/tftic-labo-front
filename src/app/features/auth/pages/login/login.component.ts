import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { LOGIN_FORM } from '../../forms/login.form';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly notificationService = inject(NotificationService);
  private readonly router = inject(Router);
  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group(LOGIN_FORM);
  }

  onSubmit() {
    this.authService.login(this.form.value).subscribe({
      next: (_) => {
        this.router.navigate(['/']).then();
        this.notificationService.showSuccess(
          'auth.login.success.summary',
          'auth.login.success.detail',
        );
      },
      error: (err) => {
        this.notificationService.showError(
          'auth.login.error.summary',
          err.error,
        );
      },
    });
  }
}
