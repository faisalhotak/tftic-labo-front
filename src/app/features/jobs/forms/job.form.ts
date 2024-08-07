import { Validators } from '@angular/forms';

export interface JobForm {
  description: string;
  annualGrossSalaryMin: number;
  annualGrossSalaryMax: number;
  activeDays: number;
  expiringDate: Date;
  zipCity: string;
  agentId: number;
  contractTypeId: number;
  jobFunctionId: number;
}

export const JOB_FORM = {
  description: ['', Validators.required],
  annualGrossSalaryMin: [0, Validators.required],
  annualGrossSalaryMax: [0, Validators.required],
  activeDays: [1, Validators.required],
  zipCity: ['', Validators.required],
  agentId: ['', Validators.required],
  jobFunctionId: ['', Validators.required],
  contractTypeId: ['', Validators.required],
};
