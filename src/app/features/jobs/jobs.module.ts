import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobService } from './service/job.service';

import { CardModule } from 'primeng/card';
import { PublishingPipePipe } from './pipes/publishing-pipe.pipe';
import { LocationPipePipe } from './pipes/location-pipe.pipe';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ListJobsComponent,
    JobsComponent,
    JobCardComponent,
    PublishingPipePipe,
    LocationPipePipe
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    CardModule,
    TranslateModule
  ],
  providers: [
    JobService
  ]
})
export class JobsModule { }
