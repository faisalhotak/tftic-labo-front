import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../service/profile.service";
import {Router} from "@angular/router";
import {Profile} from "../../models/profile";
import {Observable} from "rxjs";
import {NotificationService} from "../../../../core/services/notification.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit{
  passwordForm: FormGroup;
  menuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', routerLink: ['/profile'] },
    { label: 'change personnal informations', icon: 'pi pi-key', routerLink: ['/profile/update'] },
  ];
  profile$!: Observable<Profile>;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile();
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      const request = {
        oldPassword: this.passwordForm.value.oldPassword,
        newPassword: this.passwordForm.value.newPassword
      };

      this.profileService.userChangePassword(request).subscribe(
        () => {
          this.handleUpdateSuccess();
          this.router.navigate(['/profile']).then();
        },
        error => {
          this.handleUpdateError(error);
        }
      );
    }
  }

  private handleUpdateSuccess = () => {
    this.notificationService.showSuccess('SUCCESS', 'Profile updated successfully');
    this.router.navigate(['/profile']).then();
  }

  private handleUpdateError = (error : any) => {
    this.notificationService.showError('ERROR', 'Update error');
    console.error('Error updating profile', error);
  }
}
