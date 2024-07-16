import { Component, Input, WritableSignal } from '@angular/core';
import { ZipCity } from '../../models/zip-city';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Input() filters!: WritableSignal<Map<string, string>>;
  @Input() page!: WritableSignal<number>;

  addFilter(filter: ZipCity) {
    this.filters.update((filters) => {
      return new Map([...filters, ['city', filter.city], ['zip', filter.zip]]);
    });

    this.page.set(0);
  }
}
