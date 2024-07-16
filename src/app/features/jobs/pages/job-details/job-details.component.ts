import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  job$!: Observable<Job>;

  ngOnInit() {
    this.job$ = this.route.data.pipe(map((resolveList) => resolveList[0]));
  }
}
