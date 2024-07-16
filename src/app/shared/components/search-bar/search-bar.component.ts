import { Component, inject, Input, OnInit } from '@angular/core';
import { Job } from '../../../features/jobs/models/job';
import { JobService } from '../../../features/jobs/service/job.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit {
  private readonly jobService: JobService = inject(JobService);
  private readonly router = inject(Router);
  @Input() jobList$?: Observable<Job[]>;
  searchJob = '';
  searchCity = '';
  displayJob: Job[] = [];
  job: Job[] = [];
  showResult = false;

  ngOnInit() {
    this.jobList$!.subscribe((jobsList) => {
      this.job = jobsList;
      this.displayJob = jobsList;
    });
  }

  filterJobs() {
    if (!this.searchCity && !this.searchJob) {
      this.showResult = false;
      return;
    }
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.displayJob = jobs.jobOffers.filter((job) => {
        const matchesJob = this.searchJob
          ? job.jobFunction.name
              .toLowerCase()
              .includes(this.searchJob.toLowerCase()) ||
            job.agent.company.name
              .toLowerCase()
              .includes(this.searchJob.toLowerCase())
          : true;
        const matchesCity = this.searchCity
          ? job.zipCity.city
              .toLowerCase()
              .includes(this.searchCity.toLowerCase()) ||
            job.zipCity.zip.toString().includes(this.searchCity)
          : true;

        return matchesJob && matchesCity;
      });
    });
  }

  onSearchJob() {
    this.filterJobs();
    this.showResult = true;
  }

  displayResult(): boolean {
    return this.displayJob.length > 0;
  }

  displayDetails(jobId: number) {
    this.router.navigate(['jobs', jobId]);
  }
}
