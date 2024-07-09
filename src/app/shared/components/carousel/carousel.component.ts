import { Component, inject, Input, OnInit } from '@angular/core';
import { Job } from '../../../features/jobs/models/job';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() jobs$!: Observable<Job[]>;

  jobs!: Job[];
  responsiveOptions: any[] | undefined;
  private readonly router: Router = inject(Router);

  ngOnInit() {
    this.jobs$.subscribe((jobsList) => {
      this.jobs = jobsList;
    });
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  displayDetails(jobId: number) {
    this.router.navigate(['jobs', jobId]);
  }

  applyJob(jobId: number) {}
}
