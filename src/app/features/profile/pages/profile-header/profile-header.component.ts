import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  @Input() firstname!: string;
  @Input() lastname!: string;
  @Input() menuItems!: MenuItem[];

  getInitials() {
    return `${this.lastname.charAt(0)}${this.firstname.charAt(0)}`;
  }
}
