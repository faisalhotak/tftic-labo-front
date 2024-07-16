import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import { PasswordRequest } from '../models/password-request';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';

@Injectable()
export class ProfileService {
  private readonly http = inject(HttpClient);

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(API_ENDPOINTS.profile.me);
  }

  updateJobSeekerProfile(jobSeekerUpdateRequest: any): Observable<any> {
    return this.http.put<any>(
      API_ENDPOINTS.profile.updateProfileSeeker,
      jobSeekerUpdateRequest,
    );
  }

  updateJobAdvertiserProfile(jobAdvertiserUpdateRequest: any): Observable<any> {
    return this.http.put<any>(
      API_ENDPOINTS.profile.updateAdvisor,
      jobAdvertiserUpdateRequest,
    );
  }

  userChangePassword(request: PasswordRequest): Observable<any> {
    return this.http.patch(API_ENDPOINTS.profile.changePassword, request);
  }
}
