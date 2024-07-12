import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Job, PagedJobOffers } from '../models/job';
import { COMMON } from '../../../core/constants/common';

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
                  expirationDate: new Date(job.expiringDate),
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
            expirationDate: new Date(job.expiringDate),
          }) as Job,
      ),
    );
  }

  getAllLocations(): Observable<string[]> {
    return this.http.get<string[]>(`/job-offers/locations`);
  }
}
