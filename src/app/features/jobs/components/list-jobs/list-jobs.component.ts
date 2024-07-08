import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Observable } from 'rxjs';
import { Job } from '../../models/job';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrl: './list-jobs.component.scss'
})
<<<<<<< HEAD
export class ListJobsComponent implements OnInit{
  jobs$!: Observable<Job[]>;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobs$ = this.jobService.getAllJobs();
  }
=======
export class ListJobsComponent {
  @Input() jobs$!: Observable<Job[]>;
>>>>>>> e255ac6 (Feat(jobs): adding location filter)

}
