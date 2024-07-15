import { Component, inject, Input, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() jobs$!: Observable<Job[]>;
  jobs!: Job[];
  responsiveOptions!: any[];
  displayApplyDialog: boolean = false;
  selectedJob?: Job;
  private readonly router: Router = inject(Router);
  private readonly $auth = inject(AuthService);
  isLoggedIn = toSignal(this.$auth.isLoggedIn$);

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
        breakpoint: '417px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  displayDetails(jobId: number) {
    this.router.navigate(['jobs', jobId]);
  }
  applyJob(job: Job) {
    this.selectedJob = job;
    this.displayApplyDialog = true;
  }
  closeDialog() {
    this.selectedJob = undefined;
    this.displayApplyDialog = false;
  }

  protected readonly String = String;
}
