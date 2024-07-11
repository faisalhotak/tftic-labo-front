import { Component, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FORMS } from '../../forms/register.form';
import { NotificationService } from '../../../../core/services/notification.service';

export type UserType = 'seekers' | 'advertisers';

export interface UserTypeDetails {
  type: UserType;
  message: string;
  form: any;
}

const MESSAGES = {
  seekers: 'auth.register.seeker.message',
  advertisers: 'auth.register.advertiser.message',
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  protected form: FormGroup;

  protected readonly selectTypes = [
    {
      label: this._translateService.instant('seeker'),
      value: 'seekers',
    },
    {
      label: this._translateService.instant('advertiser'),
      value: 'advertisers',
    },
  ];

  protected userType = signal<UserType>('seekers');

  protected userTypeDetails: UserTypeDetails = {
    type: this.userType(),
    message: MESSAGES[this.userType()],
    form: FORMS[this.userType()],
  };

  protected genders = [
    {
      name: this._translateService.instant('gender.M'),
      value: 'M',
    },
    {
      name: this._translateService.instant('gender.F'),
      value: 'F',
    },
    {
      name: this._translateService.instant('gender.X'),
      value: 'X',
    },
  ];

  constructor(
    private readonly _builder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _routerService: Router,
    private readonly _notificationService: NotificationService,
    private readonly _translateService: TranslateService,
  ) {
    this.form = this._builder.group(this.userTypeDetails.form);

    effect(() => {
      const type = this.userType();

      this.userTypeDetails = {
        type,
        message: MESSAGES[type],
        form: FORMS[type],
      };

      this.form = this._builder.group(this.userTypeDetails.form);
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    this._authService
      .registerUser(this.form.value, this.userTypeDetails.type)
      .subscribe({
        next: (_) => {
          this._routerService.navigate(['/']).then();

          this._notificationService.showSuccess(
            'auth.register.success.summary',
            'auth.register.success.detail',
          );
        },
        error: (err) => {
          this._notificationService.showError(
            'auth.register.error.summary',
            JSON.stringify(err.error),
          );
        },
      });
  }
}
