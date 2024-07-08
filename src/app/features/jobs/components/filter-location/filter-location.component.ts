import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { JobService } from '../../service/job.service';
import { FilterPair } from '../../models/filter-pair';

@Component({
  selector: 'app-filter-location',
  templateUrl: './filter-location.component.html',
  styleUrl: './filter-location.component.scss'
})
export class FilterLocationComponent implements OnInit{

  constructor(private jobService: JobService) {}

  locations$ = this.jobService.getAllLocations();

  selectedLocation!: string;
  @Output() newLocationFilter = new EventEmitter<FilterPair>();
  
  locationList!: string[];
  filtredLocation!: string[];

  onChangeLocation(newLocation: string) {
    if (newLocation !== null) {
      this.newLocationFilter.emit({key: "zipCity", value: newLocation});
    } else {
      this.newLocationFilter.emit({key: "zipCity", value: ""});
    }
  }

  search(event: AutoCompleteCompleteEvent) {
    this.filtredLocation = this.locationList.filter((location: string) => location.toLowerCase().includes(event.query.toLowerCase()))
  };

  ngOnInit() {
    this.locations$.subscribe(locations => {
      this.locationList = locations;
    });
  }
}
