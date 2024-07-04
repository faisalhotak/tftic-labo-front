import { Component, effect } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { REGISTER_SEEKER_FORM } from '../../forms/register.form';

interface UserType {
  type: 'seekers' | 'advertisers';
  message: string;
  form: any;
}

const MESSAGES = {
  seeker: 'auth.register.seeker.message',
  advertiser: 'auth.register.advertiser.message',
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

  protected userType: UserType = {
    type: 'seekers',
    message: MESSAGES['seeker'],
    form: REGISTER_SEEKER_FORM,
  };

  protected genders = [
    {
      key: '1',
      name: this._translateService.instant('gender.M'),
      value: 'M',
    },
    {
      key: '2',
      name: this._translateService.instant('gender.F'),
      value: 'F',
    },
    {
      key: '3',
      name: this._translateService.instant('gender.X'),
      value: 'X',
    },
  ];

  constructor(
    private readonly _builder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _routerService: Router,
    private readonly _messageService: MessageService,
    private readonly _translateService: TranslateService,
  ) {
    this.form = this._builder.group(this.userType.form);

    effect(() => {
      const userType = this.userType;
      const form = userType.form;
      console.log('userType', userType);
      console.log('form', form);
    });
  }

  onSelectChange() {
    console.log('onSelectChange');
    console.log('this.userType', this.userType);
    this.form = this._builder.group(this.userType.form);
  }

  onSubmit() {
    // this._authService.registerAdvertiser(this.form.value).subscribe({
    //   next: (_) => {
    //     this._routerService.navigate(['/']).then();
    //     this._messageService.add({
    //       severity: 'success',
    //       summary: this._translateService.instant(
    //         'auth.register.success.summary',
    //       ),
    //       detail: this._translateService.instant(
    //         'auth.register.success.detail',
    //       ),
    //     });
    //   },
    //   error: (err) => {
    //     this._messageService.add({
    //       severity: 'error',
    //       summary: this._translateService.instant(
    //         'auth.register.error.summary',
    //       ),
    //       detail: err.error,
    //     });
    //   },
    // });
  }
}
