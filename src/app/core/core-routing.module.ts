import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import {HomeComponent} from "../features/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('../features/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'jobs',
        loadChildren: () =>
          import('../features/jobs/jobs.module').then((m) => m.JobsModule),
      },
      {
        path: 'companies',
        loadChildren: () =>
          import('../features/companies/companies.module').then((m) => m.CompaniesModule),
      },
      {
        path : 'profile',
        loadChildren: () =>
          import('../features/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: '',
        component: HomeComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
