import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../service/profile.service";
import {Router} from "@angular/router";
import {Profile} from "../../models/profile";
import {NotificationService} from "../../../../core/services/notification.service";
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrl: './update-profil.component.scss'
})
export class UpdateProfilComponent implements OnInit {
  updateForm: FormGroup;
  genderOptions = [
    { label: 'male', value: 'M' },
    { label: 'female', value: 'F' },
    { label: 'other', value: 'X' }
  ];

  menuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', routerLink: ['/profile'] },
    { label: 'change password', icon: 'pi pi-key', routerLink: ['/profile/changepassword'] },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private profileService: ProfileService,
    private router: Router,
    private notificationService: NotificationService,
    private authService: AuthService
  ) {
    this.updateForm = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: [''],
      contactEmail: ['', Validators.email],
      street: [''],
      city: [''],
      zip: [''],
      country: [''],
      birthDate: [''],
      gender: ['']
    });
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (profile: Profile) => {
        this.updateForm.patchValue({
          ...profile,
          street: profile.address.street,
          city: profile.address.city,
          zip: profile.address.zip,
          country: profile.address.country,
          birthDate : profile.birthDate ? new Date(profile.birthDate) : null,
        });
      },
      error => console.error('Error fetching profile', error)
    );
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const updatedProfile = {
        firstname: this.updateForm.value.firstname,
        lastname: this.updateForm.value.lastname,
        phoneNumber: this.updateForm.value.phoneNumber,
        contactEmail: this.updateForm.value.contactEmail,
        street: this.updateForm.value.street,
        city: this.updateForm.value.city,
        zip: this.updateForm.value.zip,
        country: this.updateForm.value.country,
        birthDate: this.updateForm.value.birthDate,
        gender: this.updateForm.value.gender
      };

      if (this.isSeeker()) {
        this.profileService.updateJobSeekerProfile(updatedProfile).subscribe(
          this.handleUpdateSuccess,
          this.handleUpdateError
        );
      } else {
        this.profileService.updateJobAdvertiserProfile(updatedProfile).subscribe(
          this.handleUpdateSuccess,
          this.handleUpdateError
        );
      }
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

  isSeeker(): boolean {
    return this.authService.getCurrentUserRoles().includes('SEEKER');
  }
}
