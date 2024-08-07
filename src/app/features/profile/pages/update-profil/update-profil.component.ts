import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../service/profile.service';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { NotificationService } from '../../../../core/services/notification.service';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrl: './update-profil.component.scss',
})
export class UpdateProfilComponent implements OnInit {
  updateForm: FormGroup;
  genderOptions = [
    { label: 'profile.male', value: 'M' },
    { label: 'profile.female', value: 'F' },
    { label: 'profile.other', value: 'X' },
  ];

  menuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', routerLink: ['/profile'] },
    {
      label: 'profile.changePassword',
      icon: 'pi pi-key',
      routerLink: ['/profile/change-password'],
    },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private profileService: ProfileService,
    private router: Router,
    private notificationService: NotificationService,
    private authService: AuthService,
  ) {
    this.updateForm = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      contactEmail: ['', Validators.email],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      birthDate: [''],
      gender: [''],
    });
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (profile: Profile) => {
        this.updateForm.patchValue({
          ...profile,
          street: profile.address.street,
          city: profile.address.city,
          zip: profile.address.zip,
          country: profile.address.country,
          birthDate: profile.birthDate ? new Date(profile.birthDate) : null,
        });
      },
      error: (error) => console.error('Error fetching profile', error),
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      if (this.authService.isSeeker) {
        this.profileService
          .updateJobSeekerProfile(this.updateForm.value)
          .subscribe({
            next: this.handleUpdateSuccess,
            error: this.handleUpdateError,
          });
      }
      if (this.authService.isAdvertiser) {
        this.profileService
          .updateJobAdvertiserProfile(this.updateForm.value)
          .subscribe({
            next: this.handleUpdateSuccess,
            error: this.handleUpdateError,
          });
      }
    }
  }

  private handleUpdateSuccess = () => {
    this.notificationService.showSuccess(
      'SUCCESS',
      'Profile updated successfully',
    );
    this.router.navigate(['/profile']).then();
  };

  private handleUpdateError = (err: any) => {
    this.notificationService.showError('ERROR', JSON.stringify(err.error));
    console.error('Error updating profile', err);
  };

  isSeeker(): boolean {
    return this.authService.isSeeker;
  }
}
