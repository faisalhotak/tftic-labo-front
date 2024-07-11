import { Component, inject, OnInit } from '@angular/core';
import { Job } from '../jobs/models/job';
import { JobService } from '../jobs/service/job.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  jobs$!: Observable<Job[]>;
  private readonly jobService: JobService = inject(JobService);

  ngOnInit() {
    this.jobs$ = this.jobService
      .getAllJobs()
      .pipe(map((pagedJobOffers) => pagedJobOffers.jobOffers));
  }
}
