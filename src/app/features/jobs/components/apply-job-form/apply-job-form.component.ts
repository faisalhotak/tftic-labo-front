import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Job } from '../../models/job';
import { Observable } from 'rxjs';
import { JobService } from '../../service/job.service';
import { ApplyService } from '../../../../core/services/apply.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-apply-job-form',
  templateUrl: './apply-job-form.component.html',
  styleUrl: './apply-job-form.component.scss',
})
export class ApplyJobFormComponent implements OnInit {
  private readonly jobService = inject(JobService);
  private readonly applyService = inject(ApplyService);
  private readonly route = inject(Router);
  private readonly notificationService = inject(NotificationService);

  job$!: Observable<Job>;

  @Input({ required: true })
  jobId!: number;
  checked = false;
  @Output()
  closeDialog: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    this.job$ = this.jobService.getJobById(this.jobId);
  }

  applyJob() {
    this.applyService.applyForJob(this.jobId).subscribe({
      next: () => {
        this.route.navigate(['/']).then(() => {
          this.notificationService.showSuccess(
            'apply.success.summary',
            'apply.success.detail',
          );
          this.closeDialog.emit();
        });
      },
      error: (err) => {
        console.error(err);
        this.notificationService.showError('apply.error.summary', err.error);
        this.closeDialog.emit();
      },
    });
  }
}
