import { Validators } from '@angular/forms';

export interface JobForm {
    description: string;
    annualGrossSalaryMin: number;
    annualGrossSalaryMax: number;
    publishingDate: Date;
    activeDays: number;
    expiringDate: Date;
    zipCity: string;
    agentId: number;
    contractTypeId: number;
    jobFunctionId: number;
}

export const JOB_FORM = {
    jobFunction: ['', Validators.required],
    zipCity: ['', Validators.required],
    activeDays: ['', Validators.required],
    jobDescription: ['', Validators.required],
    contractType: ['', Validators.required],
    minAnnualSalary: ['', Validators.required],
    maxAnnualSalary: ['', Validators.required],
}