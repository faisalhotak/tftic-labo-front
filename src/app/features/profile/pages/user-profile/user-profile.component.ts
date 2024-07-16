import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ROLES } from '../../../../core/constants/roles';
import { MenuItem } from 'primeng/api';
import { CardData } from '../../../../shared/models/card-data';
import { Profile } from '../../models/profile';
import { AuthService } from '../../../../core/services/auth.service';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  profile$!: Observable<Profile>;
  userRoles: string[] = [];
  profileData: CardData[] = [];

  menuItems: MenuItem[] = [
    { label: 'profile.profile', icon: 'pi pi-user', routerLink: ['/profile'] },
    {
      label: 'profile.changePassword',
      icon: 'pi pi-key',
      routerLink: ['/profile/change-password'],
    },
    {
      label: 'profile.changePersonnalInfo',
      icon: 'pi pi-key',
      routerLink: ['/profile/update'],
    },
  ];

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.userRoles = this.authService.getCurrentUserRoles();
    const isSeeker: boolean = this.userRoles.includes(ROLES.SEEKER);

    this.profile$ = this.profileService.getProfile().pipe(
      map((profile) => {
        const data = {
          ...profile,
        };

        this.profileData = [
          {
            label: 'email',
            value: data.email,
            iconClass: 'pi pi-envelope',
          },
          {
            label: 'lastname',
            value: data.lastname,
            iconClass: 'pi pi-user',
          },
          {
            label: 'firstname',
            value: data.firstname,
            iconClass: 'pi pi-user',
          },
          {
            label: 'address',
            value: `${data.address.street}, ${data.address.city}, ${data.address.zip}, ${data.address.country}`,
            iconClass: 'pi pi-home',
          },
        ];

        if (isSeeker && profile.birthDate && profile.gender) {
          data.birthDate = new Date(profile.birthDate);
          this.profileData.push({
            label: 'profile.birthdate',
            value: data.birthDate.toLocaleDateString(),
            iconClass: 'pi pi-calendar',
          });
          this.profileData.push({
            label: 'profile.gender',
            value: profile.gender,
            iconClass: 'pi pi-user',
          });
        }

        return data;
      }),
    );
  }
}
