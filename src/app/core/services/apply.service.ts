import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  JobApplication,
  JobApplicationResponse,
} from '../../features/jobs/models/job';

@Injectable({
  providedIn: 'root',
})
export class ApplyService {
  private readonly _httpClient = inject(HttpClient);

  applyForJob(jobId: number): Observable<JobApplicationResponse> {
    const jobApplication: JobApplication = {
      jobOfferId: jobId,
    };
    return this._httpClient.post<JobApplicationResponse>(
      `/applications`,
      jobApplication,
    );
  }
}
