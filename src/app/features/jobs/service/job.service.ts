import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { COMMON } from '../../../core/constants/common';
import { ContractType, Job, JobFunction, PagedJobOffers } from '../models/job';
import { JobForm } from '../forms/job.form';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';

@Injectable()
export class JobService {
  private readonly http = inject(HttpClient);

  getAllJobs(
    params: Map<string, string> = new Map(),
    page: number = 0,
  ): Observable<PagedJobOffers> {
    let httpParams = new HttpParams().set(COMMON.page, page.toString());

    for (let [key, value] of params) {
      httpParams = httpParams.append(key, value);
    }

    return this.http
      .get<PagedJobOffers>(`/job-offers`, {
        params: httpParams,
      })
      .pipe(
        map((pagedJobOffers) => {
          return {
            ...pagedJobOffers,
            jobOffers: pagedJobOffers.jobOffers.map(
              (job) =>
                ({
                  ...job,
                  createdAt: new Date(job.createdAt),
                }) as Job,
            ),
          };
        }),
      );
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`/job-offers/${id}`).pipe(
      map(
        (job) =>
          ({
            ...job,
            createdAt: new Date(job.createdAt),
          }) as Job,
      ),
    );
  }

  getAllLocations(): Observable<string[]> {
    return this.http.get<string[]>(API_ENDPOINTS.jobs.location);
  }

  getContractTypes(): Observable<ContractType[]> {
    return this.http.get<ContractType[]>(API_ENDPOINTS.jobs.contractTypes);
  }

  getJobFunctions(): Observable<JobFunction[]> {
    return this.http.get<JobFunction[]>(API_ENDPOINTS.jobs.jobFunction);
  }

  postJob(newJob: JobForm): Observable<JobForm> {
    return this.http.post<JobForm>(API_ENDPOINTS.jobs.jobOffers, newJob);
  }
}
