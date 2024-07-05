import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Observable } from 'rxjs';
import { Job } from '../../models/job';
import { Pair } from '../../../../shared/models/pair';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit{
  constructor(private readonly jobService: JobService) {
  }

  getJobs() {
    this.jobs$ = this.jobService.getAllJobs(this.filters);
    this.jobsToSend$.emit(this.jobs$);
  }
  
  jobs$!: Observable<Job[]>;

  filters: Map<string, string> = new Map<string, string>();

  @Output() jobsToSend$ = new EventEmitter<Observable<Job[]>>();

  addFilter(filter: Pair) {
    this.filters.set(filter.key, filter.value);
    console.log(this.filters);
    this.getJobs();
  }

  ngOnInit() {
    this.getJobs();
  }
}
