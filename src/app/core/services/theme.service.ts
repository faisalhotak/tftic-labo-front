import { Injectable } from '@angular/core';
import { COMMON } from '../constants/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  activeTheme: string = COMMON.light;

  setTheme(theme: string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
    this.activeTheme = theme;
  }
}
