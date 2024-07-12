import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { AdvertiserGuard } from '../../core/guards/advertiser.guard';
import { NewJobComponent } from './pages/new-job/new-job.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
  },
  {
    path: 'new',
    component: NewJobComponent,
    canActivate: [AdvertiserGuard],
  },
  {
    path: ':id',
    component: JobDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
