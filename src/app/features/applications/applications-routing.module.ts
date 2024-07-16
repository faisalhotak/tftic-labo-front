import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsComponent,
  },
  {
    path: ':id',
    component: ApplicationDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
