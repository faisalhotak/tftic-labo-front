import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LOGIN_FORM } from '../../forms/login.form';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    builder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _routerService: Router,
    private readonly _messageService: MessageService,
    private readonly _translateService: TranslateService,
  ) {
    this.form = builder.group(LOGIN_FORM);
  }

  onSubmit() {
    this._authService.login(this.form.value).subscribe({
      next: (_) => {
        this._routerService.navigate(['/']).then();
        this._messageService.add({
          severity: 'success',
          summary: this._translateService.instant('auth.login.success.summary'),
          detail: this._translateService.instant('auth.login.success.detail'),
        });
      },
      error: (err) => {
        this._messageService.add({
          severity: 'error',
          summary: this._translateService.instant('auth.login.error.summary'),
          detail: err.error,
        });
      },
    });
  }
}
