import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ZipCity } from '../../models/zip-city';
import { JobService } from '../../../features/jobs/service/job.service';

@Component({
  selector: 'app-filter-location',
  templateUrl: './filter-location.component.html',
  styleUrl: './filter-location.component.scss',
})
export class FilterLocationComponent {
  private readonly jobService = inject(JobService);

  private locationList!: ZipCity[];
  protected filteredLocation: ZipCity[] = [];
  protected selectedLocation!: ZipCity;

  @Output() newLocationFilter = new EventEmitter<ZipCity>();

  constructor() {
    this.jobService.getAllLocations().subscribe((locations) => {
      this.locationList = locations;
    });
  }

  onChangeLocation(newLocation: ZipCity) {
    if (!newLocation) {
      newLocation = { id: 0, zip: '', city: '' };
    }

    this.newLocationFilter.emit(newLocation);
  }

  search(event: AutoCompleteCompleteEvent) {
    this.filteredLocation = this.locationList.filter(
      (zipCity) =>
        zipCity.zip.toString().includes(event.query.toLowerCase()) ||
        zipCity.city.toLowerCase().includes(event.query.toLowerCase()),
    );
  }

  getLocationLabel(location: ZipCity): string {
    return `${location.zip} - ${location.city}`;
  }
}
