import { Component, inject, OnInit } from '@angular/core';
import { FilterService, SelectItemGroup } from 'primeng/api';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit {
  selectedCity: any;
  filteredGroups: any[] = [];
  groupedCities: SelectItemGroup[] | undefined;

  private readonly filterService: FilterService = inject(FilterService);

  ngOnInit() {
    this.groupedCities = [
      {
        label: 'Belgium',
        value: 'be',
        items: [
          { label: 'Charleroi', value: 'Charleroi' },
          { label: 'Namur', value: 'Namur' },
          { label: 'Liège', value: 'Liège' },
          { label: 'Mons', value: 'Mons' },
          { label: 'Brussels', value: 'Brussels' },
          { label: 'Antwerp', value: 'Antwerp' },
          { label: 'Ghent', value: 'Ghent' },
          { label: 'Bruges', value: 'Bruges' },
          { label: 'Leuven', value: 'Leuven' },
          { label: 'Mechelen', value: 'Mechelen' },
          { label: 'Aalst', value: 'Aalst' },
          { label: 'Kortrijk', value: 'Kortrijk' },
          { label: 'Hasselt', value: 'Hasselt' },
          { label: 'Ostend', value: 'Ostend' },
          { label: 'Sint-Niklaas', value: 'Sint-Niklaas' },
          { label: 'Tournai', value: 'Tournai' },
          { label: 'Genk', value: 'Genk' },
          { label: 'Seraing', value: 'Seraing' },
          { label: 'Roeselare', value: 'Roeselare' },
          { label: 'Verviers', value: 'Verviers' },
          { label: 'Mouscron', value: 'Mouscron' },
          { label: 'La Louvière', value: 'La Louvière' },
          { label: 'Vilvoorde', value: 'Vilvoorde' },
          { label: 'Louvain-la-Neuve', value: 'Louvain-la-Neuve' },
          { label: 'Waregem', value: 'Waregem' },
          { label: 'Herstal', value: 'Herstal' },
          { label: 'Beringen', value: 'Beringen' },
          { label: 'Turnhout', value: 'Turnhout' },
          { label: 'Dilbeek', value: 'Dilbeek' },
          { label: 'Heist-op-den-Berg', value: 'Heist-op-den-Berg' },
          { label: 'Sint-Truiden', value: 'Sint-Truiden' },
          { label: 'Lokeren', value: 'Lokeren' },
          { label: "Braine-l'Alleud", value: "Braine-l'Alleud" },
          { label: 'Geel', value: 'Geel' },
          { label: 'Ninove', value: 'Ninove' },
          { label: 'Grimbergen', value: 'Grimbergen' },
          { label: 'Tongeren', value: 'Tongeren' },
          { label: 'Zottegem', value: 'Zottegem' },
          { label: 'Ieper', value: 'Ieper' },
          { label: 'Halle', value: 'Halle' },
          { label: 'Binche', value: 'Binche' },
          { label: 'Lier', value: 'Lier' },
          { label: 'Aarschot', value: 'Aarschot' },
          { label: 'Morlanwelz', value: 'Morlanwelz' },
          { label: 'Eupen', value: 'Eupen' },
          { label: 'Huy', value: 'Huy' },
          { label: 'Ath', value: 'Ath' },
          { label: 'Neerpelt', value: 'Neerpelt' },
          { label: 'Schoten', value: 'Schoten' },
          { label: 'Menen', value: 'Menen' },
          { label: 'Duffel', value: 'Duffel' },
          { label: 'Dendermonde', value: 'Dendermonde' },
          { label: 'Bastogne', value: 'Bastogne' },
          { label: 'Malmedy', value: 'Malmedy' },
          { label: 'Soignies', value: 'Soignies' },
          { label: 'Knokke-Heist', value: 'Knokke-Heist' },
          { label: 'Deinze', value: 'Deinze' },
          { label: 'Wavre', value: 'Wavre' },
          { label: 'Rixensart', value: 'Rixensart' },
          { label: 'Oudenaarde', value: 'Oudenaarde' },
          { label: 'Geraardsbergen', value: 'Geraardsbergen' },
          { label: 'Hamme', value: 'Hamme' },
          { label: 'Maaseik', value: 'Maaseik' },
          { label: 'Châtelet', value: 'Châtelet' },
          { label: 'Koksijde', value: 'Koksijde' },
          { label: 'Tienen', value: 'Tienen' },
          { label: 'Harelbeke', value: 'Harelbeke' },
          { label: 'Bilzen', value: 'Bilzen' },
          { label: 'Oupeye', value: 'Oupeye' },
          { label: 'Jambes', value: 'Jambes' },
          { label: 'Lommel', value: 'Lommel' },
          { label: 'Westerlo', value: 'Westerlo' },
          { label: 'Andenne', value: 'Andenne' },
          { label: 'Flemalle', value: 'Flemalle' },
          { label: 'Spa', value: 'Spa' },
          { label: 'Lanaken', value: 'Lanaken' },
        ],
      },
    ];
  }

  filterGroupedCity(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    const filteredGroups = [];

    if (!this.groupedCities) {
      return;
    }

    for (let optgroup of this.groupedCities) {
      let filteredSubOptions = this.filterService.filter(
        optgroup.items,
        ['label'],
        query,
        'contains',
      );
      if (filteredSubOptions && filteredSubOptions.length) {
        filteredGroups.push({
          label: optgroup.label,
          value: optgroup.value,
          items: filteredSubOptions,
        });
      }
    }

    this.filteredGroups = filteredGroups;
  }
}
