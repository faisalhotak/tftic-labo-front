import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Application, ApplicationStatus } from '../../models/application';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.scss',
})
export class ApplicationDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly applicationStatusOptions = [
    { value: 'SUBMITTED', label: 'Submitted' },
    { value: 'UNDER_REVIEW', label: 'Under review' },
    { value: 'ACCEPTED', label: 'Accepted' },
    { value: 'CANCELLED', label: 'Cancelled' },
    { value: 'REJECTED', label: 'Rejected' },
  ];

  application$!: Observable<Application>;

  applicationStatus = signal<ApplicationStatus>('ACCEPTED');

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
