import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ContractType, JobFunction } from '../../models/job';
import { JobService } from '../../service/job.service';
import { JOB_FORM } from '../../forms/job.form';
import { CompanyAdvertiser } from '../../../../shared/models/company-advertiser';
import { CompanyAdvertiserService } from '../../../../shared/service/company-advertiser.service';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ZipCity } from '../../../../shared/models/zip-city';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
})
export class JobFormComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly jobService = inject(JobService);
  private readonly companyAdvertiserService = inject(CompanyAdvertiserService);
  private readonly authService = inject(AuthService);
  private readonly notificationService = inject(NotificationService);

  locations: ZipCity[] = [];
  filteredLocations: ZipCity[] = [];
  zipCities$!: Observable<ZipCity[]>;
  contractTypes$!: Observable<ContractType[]>;
  jobFunctions$!: Observable<JobFunction[]>;
  companyAdvertiser$!: Observable<CompanyAdvertiser[]>;

  jobForm!: FormGroup;

  saveJob(): void {
    this.jobService.postJob(this.jobForm.value).subscribe({
      next: (_) => {
        this.router.navigate(['/jobs/my-jobs']).then();

        this.notificationService.showSuccess(
          'job.success.summary',
          'job.success.detail',
        );
      },
      error: (err) => {
        this.notificationService.showError(
          'job.error.summary',
          JSON.stringify(err.error),
        );
      },
    });
  }

  ngOnInit(): void {
    this.zipCities$ = this.jobService.getAllLocations().pipe(
      map((locations) => {
        this.locations = locations;

        return locations;
      }),
    );

    this.contractTypes$ = this.jobService.getContractTypes();

    this.jobFunctions$ = this.jobService.getJobFunctions();

    this.companyAdvertiser$ =
      this.companyAdvertiserService.getByJobAdvertiserId(
        this.authService.userId!,
      );

    this.jobForm = this.formBuilder.group(JOB_FORM);
  }

  search(event: AutoCompleteCompleteEvent) {
    this.filteredLocations = this.locations.filter(
      (zipCity) =>
        zipCity.zip.toLowerCase().includes(event.query.toLowerCase()) ||
        zipCity.city.toLowerCase().includes(event.query.toLowerCase()),
    );
  }

  getLocationLabel(location: ZipCity): string {
    return `${location.zip} - ${location.city}`;
  }
}
