import { Component, Input, WritableSignal } from '@angular/core';
import { Pair } from '../../../../shared/models/pair';
import { Job } from '../../models/job';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Input() filters!: WritableSignal<Map<string, string>>;
  @Input() page!: WritableSignal<number>;

  @Input() jobOffers$!: Observable<Job[]>;

  addFilter(filter: Pair) {
    this.filters.update((filters) => {
      return new Map([...filters, [filter.key, filter.value]]);
    });

    this.page.set(0);
  }
}
