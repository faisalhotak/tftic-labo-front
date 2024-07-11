import { Component, Input, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../models/job';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrl: './list-jobs.component.scss'
})
export class ListJobsComponent {
  @Input() jobOffers$!: Observable<Job[]>;
  @Input() jobsCount!: number;
  @Input() elementsPerPage!: number;
  @Input() page!: WritableSignal<number>;

  onPageChange(paginatorState: PaginatorState) {
    const page = paginatorState.page;

    if (page !== undefined) {
      this.page.set(page);
    }
  }
}
