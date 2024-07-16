import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCompaniesComponent } from './pages/my-companies/my-companies.component';
import { AdvertiserGuard } from '../../core/guards/advertiser.guard';

const routes: Routes = [
  {
    path: 'my-companies',
    component: MyCompaniesComponent,
    canActivate: [AdvertiserGuard],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
