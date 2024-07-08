import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Job } from "../models/job";
@Injectable()
export class JobService {
    constructor(private http: HttpClient) {}

    getAllJobs(): Observable<Job[]> {
        return this.http.get<Job[]>(`${environment.baseUrl}/job-offers`).pipe(
            map(
                jobs => jobs.map(
                    job => ({...job, publishingDate: new Date(job.publishingDate), expirationDate: new Date(job.expiringDate)} as Job)
                )
            )
        );
    }
}
