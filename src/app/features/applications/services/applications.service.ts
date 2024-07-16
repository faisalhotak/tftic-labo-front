import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { COMMON } from '../../../core/constants/common';
import { Application, PagedApplications } from '../models/application';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import { parseDate } from '../../../core/utils/date-utils';

@Injectable()
export class ApplicationsService {
  private readonly httpClient = inject(HttpClient);

  getAllApplications(
    params: Map<string, string> = new Map(),
    page: number = 0,
  ): Observable<PagedApplications> {
    let httpParams = new HttpParams().set(COMMON.page, page.toString());

    for (let [key, value] of params) {
      httpParams = httpParams.append(key, value);
    }

    return this.httpClient
      .get<PagedApplications>(API_ENDPOINTS.applications, {
        params: httpParams,
      })
      .pipe(
        map((pagedApplications) => {
          return {
            ...pagedApplications,
            applications: pagedApplications.applications.map(
              (application) =>
                ({
                  ...application,
                  applyDate: parseDate(application.applyDate),
                  jobOffer: {
                    ...application.jobOffer,
                    createdAt: parseDate(application.jobOffer.createdAt),
                  },
                }) as Application,
            ),
          };
        }),
      );
  }

  getApplicationById(id: string): Observable<Application> {
    return this.httpClient
      .get<Application>(`${API_ENDPOINTS.applications}/${id}`)
      .pipe(
        map((application) => ({
          ...application,
          applyDate: parseDate(application.applyDate),
          jobOffer: {
            ...application.jobOffer,
            createdAt: parseDate(application.jobOffer.createdAt),
          },
        })),
      );
  }
}
