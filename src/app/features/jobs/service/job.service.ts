import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Job } from '../models/job';

@Injectable()
export class JobService {
  private readonly http = inject(HttpClient);

  getAllJobs(params?: Map<string, string>): Observable<Job[]> {
    let httpParams = new HttpParams();

    if (params) {
      for (let [key, value] of params) {
        httpParams = httpParams.append(key, value);
      }
    }

    return this.http
      .get<Job[]>(`${environment.baseUrl}/job-offers`, {
        params: httpParams,
      })
      .pipe(
        map((jobs) =>
          jobs.map(
            (job) =>
              ({
                ...job,
                publishingDate: new Date(job.publishingDate),
                expirationDate: new Date(job.expiringDate),
              }) as Job,
          ),
        ),
      );
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${environment.baseUrl}/job-offers/${id}`).pipe(
      map(
        (job) =>
          ({
            ...job,
            publishingDate: new Date(job.publishingDate),
            expirationDate: new Date(job.expiringDate),
          }) as Job,
      ),
    );
  }

  getAllLocations(): Observable<string[]> {
    return this.http.get<string[]>(
      `${environment.baseUrl}/job-offers/locations`,
    );
  }
}
