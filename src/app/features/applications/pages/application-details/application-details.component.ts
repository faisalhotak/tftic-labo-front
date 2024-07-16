import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Application, ApplicationStatus } from '../../models/application';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.scss',
})
export class ApplicationDetailsComponent implements OnInit {
  private readonly translateService = inject(TranslateService);
  private readonly route = inject(ActivatedRoute);
  protected readonly applicationStatusOptions = [
    {
      value: 'SUBMITTED',
      label: this.translateService.instant(
        'application.applicationStatus.submitted',
      ),
    },
    {
      value: 'UNDER_REVIEW',
      label: this.translateService.instant(
        'application.applicationStatus.underReview',
      ),
    },
    {
      value: 'ACCEPTED',
      label: this.translateService.instant(
        'application.applicationStatus.accepted',
      ),
    },
    {
      value: 'CANCELLED',
      label: this.translateService.instant(
        'application.applicationStatus.cancelled',
      ),
    },
    {
      value: 'REJECTED',
      label: this.translateService.instant(
        'application.applicationStatus.rejected',
      ),
    },
  ];

  application$!: Observable<Application>;

  applicationStatus = signal<ApplicationStatus>('SUBMITTED');

  ngOnInit() {
    this.application$ = this.route.data.pipe(
      map((resolveList) => {
        const application = resolveList[0];

        this.applicationStatus.set(application.applicationStatus);

        return application;
      }),
    );
  }
}
