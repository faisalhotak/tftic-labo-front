import { Component, Input, WritableSignal } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Observable } from 'rxjs';
import { Job } from '../../../jobs/models/job';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() foundMessage!: string;
  @Input() url!: string;
  @Input() list$!: Observable<Job[]>;
  @Input() listCount!: number;
  @Input() elementsPerPage!: number;
  @Input() page!: WritableSignal<number>;

  onPageChange(paginatorState: PaginatorState) {
    const page = paginatorState.page;

    if (page !== undefined) {
      this.page.set(page);
    }
  }
}
