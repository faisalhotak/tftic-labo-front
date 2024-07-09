import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ContractType, JobFunction } from '../../models/job';
import { JobService } from '../../service/job.service';
import { JOB_FORM } from '../../forms/job.form';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss'
})
export class JobFormComponent implements OnInit{

  private readonly formBuilder = inject(FormBuilder);
  private readonly jobService = inject(JobService);

  contractTypes$!: Observable<ContractType[]>;
  jobFunctions$!: Observable<JobFunction[]>;


  jobForm!: FormGroup;

  saveJob(): void {
    console.log(this.jobForm.value);
  }

  ngOnInit(): void {

    this.contractTypes$ = this.jobService.getContractTypes();

    this.jobFunctions$ = this.jobService.getJobFunctions();

    this.jobForm = this.formBuilder.group(JOB_FORM);
  }
}
