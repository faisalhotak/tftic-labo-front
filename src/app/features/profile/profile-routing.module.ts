import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UpdateProfilComponent } from './pages/update-profil/update-profil.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update',
    component: UpdateProfilComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
