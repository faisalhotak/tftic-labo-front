import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { JobService } from '../../service/job.service';
import { Pair } from '../../../../shared/models/pair';

@Component({
  selector: 'app-filter-location',
  templateUrl: './filter-location.component.html',
  styleUrl: './filter-location.component.scss'
})
export class FilterLocationComponent {

  constructor(private readonly jobService: JobService) {

    this.jobService.getAllLocations().subscribe(locations => {
      this.locationList = locations;
    });
  }

  selectedLocation!: string;
  @Output() newLocationFilter = new EventEmitter<Pair>();

  locationList: string[] = [];
  filteredLocation: string[] = [];

  onChangeLocation(newLocation: string) {
    if (newLocation === null) {
      newLocation = "";
    }
    
    this.newLocationFilter.emit({key: "zipCity", value: newLocation});
  }

  search(event: AutoCompleteCompleteEvent) {
    this.filteredLocation = this.locationList.filter((location: string) => location.toLowerCase().includes(event.query.toLowerCase()))
  };

}
