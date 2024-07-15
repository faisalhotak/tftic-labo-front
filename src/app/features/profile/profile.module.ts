import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import {MenuModule} from "primeng/menu";
import {SharedModule} from "../../shared/shared.module";
import {AvatarModule} from "primeng/avatar";
import { ProfileHeaderComponent } from './pages/profile-header/profile-header.component';
import { UpdateProfilComponent } from './pages/update-profil/update-profil.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import {PasswordModule} from "primeng/password";


@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileHeaderComponent,
    UpdateProfilComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MenuModule,
    SharedModule,
    AvatarModule,
    ReactiveFormsModule,
    CalendarModule,
    PaginatorModule,
    InputTextModule,
    PasswordModule
  ]
})
export class ProfileModule { }
