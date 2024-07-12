import { Component, effect, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from '../../../core/services/cookie.service';
import { COMMON } from '../../../core/constants/common';

type Country = { name: string; code: 'en' | 'fr' | 'nl' | 'de'; icon: string };

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrl: './country-dropdown.component.scss',
})
export class CountryDropdownComponent {
  private readonly cookieService = inject(CookieService);
  private readonly translateService = inject(TranslateService);

  protected readonly countries: Country[] = [
    {
      name: 'United Kingdom',
      code: 'en',
      icon: './assets/icons/flags/uk.svg',
    },
    { name: 'France', code: 'fr', icon: './assets/icons/flags/fr.svg' },
    { name: 'Netherlands', code: 'nl', icon: './assets/icons/flags/nl.svg' },
    { name: 'Germany', code: 'de', icon: './assets/icons/flags/de.svg' },
  ];

  protected selectedCountry = signal<Country>(this.getPreferredLanguage());

  constructor() {
    effect(() => {
      this.cookieService.set(
        COMMON.i18n.cookieName,
        this.selectedCountry().code,
      );
      this.translateService.use(this.selectedCountry().code.toLowerCase());
    });
  }

  getPreferredLanguage() {
    const currentLang = this.translateService.currentLang;
    const country = this.countries.find(
      (country) => country.code === currentLang,
    );

    if (!country) {
      this.cookieService.set(COMMON.i18n.cookieName, this.countries[0].code);

      return this.countries[0];
    }

    return country;
  }
}
