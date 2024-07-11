import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  HttpBackend,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { COMMON } from './core/constants/common';
import { ToastModule } from 'primeng/toast';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthService } from './core/services/auth.service';
import { MessageService } from 'primeng/api';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';
import { GlobalErrorHandler } from './core/handlers/global-error.handler';
import { CoreModule } from './core/core.module';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { baseInterceptor } from './core/interceptors/base.interceptor';

const httpTranslateLoader = (http: HttpBackend) => {
  return new MultiTranslateHttpLoader(http, [
    { prefix: COMMON.i18n.path, suffix: COMMON.i18n.extension },
  ]);
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
        useFactory: httpTranslateLoader,
        deps: [HttpBackend],
      },
    }),
    ToastModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    AuthService,
    MessageService,
    provideHttpClient(withInterceptors([baseInterceptor, jwtInterceptor])),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
