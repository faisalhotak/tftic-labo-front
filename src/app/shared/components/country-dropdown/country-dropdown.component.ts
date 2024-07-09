import { Component, effect, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Country = { name: string; code: 'EN' | 'FR' | 'NL' | 'DE'; icon: string };

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrl: './country-dropdown.component.scss',
})
export class CountryDropdownComponent {
  private readonly $translateService = inject(TranslateService);

  private readonly defaultCountry: Country = {
    name: 'United Kingdom',
    code: 'EN',
    icon: './assets/icons/flags/uk.svg',
  };

  protected readonly countries: Country[] = [
    { ...this.defaultCountry },
    { name: 'France', code: 'FR', icon: './assets/icons/flags/fr.svg' },
    { name: 'Netherlands', code: 'NL', icon: './assets/icons/flags/nl.svg' },
    { name: 'Germany', code: 'DE', icon: './assets/icons/flags/de.svg' },
  ];

  protected selectedCountry = signal<Country>(this.defaultCountry);

  constructor() {
    effect(() => {
      this.$translateService.use(this.selectedCountry().code.toLowerCase());
    });
  }
}
