import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../models/profile";
import {UserExperience} from "../models/user-experience";
import {PasswordRequest} from "../models/password-request";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`/profile/me`);
  }

  getSeekerExperience(): Observable<UserExperience[]> {
    return this.http.get<UserExperience[]>(`/experience-details`);

  }

  updateJobSeekerProfile(jobSeekerUpdateRequest: any): Observable<any> {
    return this.http.put<any>(`/profile/update-job-seeker`, jobSeekerUpdateRequest);
  }

  updateJobAdvertiserProfile(jobAdvertiserUpdateRequest: any): Observable<any> {
    return this.http.put<any>(`/profile/update-job-advertiser`, jobAdvertiserUpdateRequest);
  }

  userChangePassword(request : PasswordRequest) : Observable<any> {
    return this.http.patch('/profile/change-password', request);
  }

}
