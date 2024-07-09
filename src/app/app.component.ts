import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';
import { COMMON } from './core/constants/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly cookieService = inject(CookieService);
  private readonly translateService = inject(TranslateService);

  ngOnInit() {
    const lang =
      this.cookieService.get(COMMON.i18n.cookieName) ||
      COMMON.i18n.defaultLanguage;

    this.translateService.setDefaultLang(COMMON.i18n.defaultLanguage);
    this.translateService.use(lang);
  }
}
