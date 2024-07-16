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

import { PublishingPipe } from './pipes/publishing.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { PaginatorModule } from 'primeng/paginator';
import { JobFormComponent } from './components/job-form/job-form.component';
import { NewJobComponent } from './pages/new-job/new-job.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyAdvertiserService } from './service/company-advertiser.service';
import { SharedModule } from '../../shared/shared.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ApplyJobFormComponent } from './components/apply-job-form/apply-job-form.component';

@NgModule({
  declarations: [
    ListJobsComponent,
    JobsComponent,
    JobCardComponent,
    PublishingPipe,
    JobFormComponent,
    NewJobComponent,
    JobDetailsComponent,
    ApplyJobFormComponent,
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
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    ReactiveFormsModule,
    SharedModule,
    CheckboxModule,
  ],
  exports: [PublishingPipe, ApplyJobFormComponent],
  providers: [JobService, CompanyAdvertiserService],
})
export class JobsModule {}
