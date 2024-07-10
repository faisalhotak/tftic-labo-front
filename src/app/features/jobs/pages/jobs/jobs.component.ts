import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  jobsToSend$!: Observable<Job[]>;

  updateJobs(updatedJobs$: Observable<Job[]>) {
    this.jobsToSend$ = updatedJobs$;
  }
}
