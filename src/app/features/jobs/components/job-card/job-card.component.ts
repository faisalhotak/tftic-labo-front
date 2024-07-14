import { Component, inject, Input } from '@angular/core';
import { Job } from '../../models/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  @Input() job!: Job;
  private readonly router: Router = inject(Router);

  displayJobDetails() {
    this.router.navigate(['jobs', this.job.id]);
  }
}
