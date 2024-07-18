import { inject, Injectable } from '@angular/core';
import { COMMON } from '../constants/common';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly cookieService = inject(CookieService);

  get() {
    return this.cookieService.get(COMMON.theme.cookieName);
  }

  set(theme: string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }

    this.cookieService.set(COMMON.theme.cookieName, theme);
  }
}
