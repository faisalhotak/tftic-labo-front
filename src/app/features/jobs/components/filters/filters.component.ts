import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Observable } from 'rxjs';
import { Job } from '../../models/job';
import { FilterPair } from '../../models/filter-pair';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit {
  constructor(private jobService: JobService) {}

  jobs$!: Observable<Job[]>;

  filters: Map<string, string> = new Map<string, string>();

  @Output() jobsToSend$ = new EventEmitter<Observable<Job[]>>();

  getJobs() {
    this.jobs$ = this.jobService.getAllJobs(this.filters);
    this.jobsToSend$.emit(this.jobs$);
  }

  addFilter(filter: FilterPair) {
    this.filters.set(filter.key, filter.value);
    this.getJobs();
  }

  ngOnInit() {
    this.getJobs();
  }
}
