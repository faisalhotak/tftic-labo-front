import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  activeTheme: string = 'light';

  setTheme(theme: string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
    this.activeTheme = theme;
  }
}
