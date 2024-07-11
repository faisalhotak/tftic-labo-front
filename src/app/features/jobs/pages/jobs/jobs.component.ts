import { Component, effect, inject, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Job } from '../../models/job';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  private readonly jobService: JobService = inject(JobService);
  protected jobOffers$!: Observable<Job[]>;
  protected jobsCount!: number;
  protected elementsPerPage!: number;

  protected filters = signal<Map<string, string>>(new Map());
  protected page = signal<number>(0);

  constructor() {
    effect(() => {
      const filters = this.filters();
      const pageNumber = this.page();

      this.fetchJobs(filters, pageNumber);
    });
  }

  fetchJobs(filters?: Map<string, string>, page: number = 0) {
    this.jobOffers$ = this.jobService.getAllJobs(filters, page).pipe(
      map((pagedJobOffers) => {
        this.jobsCount = pagedJobOffers.totalElements;
        this.elementsPerPage = pagedJobOffers.elementsPerPage;

        return pagedJobOffers.jobOffers;
      }),
    );
  }
}
