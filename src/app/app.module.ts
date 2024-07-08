import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { COMMON } from './core/constants/common';
import { ToastModule } from 'primeng/toast';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthService } from './core/services/auth.service';
import { MessageService } from 'primeng/api';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';
import { GlobalErrorHandler } from './core/handlers/global-error.handler';
import { CoreModule } from './core/core.module';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { cookieConfig } from './core/utils/config-cookie/config-cookie';

const httpTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, COMMON.i18n.path, COMMON.i18n.extension);
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => httpTranslateLoader(http),
        deps: [HttpClient],
      },
    }),
    ToastModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    NgcCookieConsentModule.forRoot(cookieConfig),
  ],

  providers: [
    AuthService,
    MessageService,
    provideHttpClient(withInterceptors([jwtInterceptor])),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly _translateService: TranslateService) {
    this._translateService.setDefaultLang(COMMON.i18n.defaultLanguage);
    this._translateService.use(COMMON.i18n.defaultLanguage);
  }
}
