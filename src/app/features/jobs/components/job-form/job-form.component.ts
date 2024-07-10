import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContractType, JobFunction } from '../../models/job';
import { JobService } from '../../service/job.service';
import { JOB_FORM } from '../../forms/job.form';
import { CompanyAdvertiser } from '../../models/company-advertiser';
import { CompanyAdvertiserService } from '../../service/company-advertiser.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss'
})
export class JobFormComponent implements OnInit{

  private readonly formBuilder = inject(FormBuilder);
  private readonly jobService = inject(JobService);
  private readonly companyAdvertiserService = inject(CompanyAdvertiserService);
  private readonly authService = inject(AuthService);

  contractTypes$!: Observable<ContractType[]>;
  jobFunctions$!: Observable<JobFunction[]>;
  companyAdvertiser$!: Observable<CompanyAdvertiser[]>;


  jobForm!: FormGroup;

  saveJob(): void {
    this.jobService.postJob(this.jobForm.value).subscribe();
  }

  ngOnInit(): void {

    this.contractTypes$ = this.jobService.getContractTypes();

    this.jobFunctions$ = this.jobService.getJobFunctions();

    this.companyAdvertiser$ = this.companyAdvertiserService.getCompanyAdvertiserByJobAdvertiserId(this.authService.currentUser!.user.id.toString());

    this.jobForm = this.formBuilder.group(JOB_FORM);
  }
}
