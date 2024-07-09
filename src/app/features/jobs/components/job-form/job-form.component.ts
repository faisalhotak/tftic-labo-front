import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss'
})
export class JobFormComponent implements OnInit{

  private readonly formBuilder = inject(FormBuilder);

  contractTypes: string[] = ['CDI', 'CDD'];
  jobFunctions: string[] = ['Développeur', 'Designer', 'Product Owner'];


  jobForm!: FormGroup;

  saveJob(): void {
    console.log(this.jobForm.value);
  }

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      jobFunction: ['', Validators.required],
      zipCity: ['', Validators.required],
      activeDays: ['', Validators.required],
      jobDescription: ['', Validators.required],
      contractType: ['', Validators.required],
      minAnnualSalary: ['', Validators.required],
      maxAnnualSalary: ['', Validators.required],
    });
  }
}
