import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobService } from './service/job.service';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { PublishingPipe} from "./pipes/publishing.pipe";
import { LocationPipe} from "./pipes/location.pipe";
import { TranslateModule } from '@ngx-translate/core';
import { FilterLocationComponent } from './components/filter-location/filter-location.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ListJobsComponent,
    JobsComponent,
    JobCardComponent,
    PublishingPipe,
    LocationPipe,
    FilterLocationComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    CardModule,
    TranslateModule,
    AccordionModule,
    AutoCompleteModule,
    FormsModule,
    ProgressSpinnerModule,
    ButtonModule
  ],
  providers: [
    JobService
  ]
})
export class JobsModule { }
