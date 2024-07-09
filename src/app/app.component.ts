import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {
  NgcContentOptions,
  NgcCookieConsentService,
  NgcInitializationErrorEvent,
  NgcInitializingEvent,
  NgcNoCookieLawEvent,
  NgcStatusChangeEvent,
} from 'ngx-cookieconsent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Labo front-end';

  private readonly ccService = inject(NgcCookieConsentService);
  private readonly translateService = inject(TranslateService);

  //keep refs to subscriptions to be able to unsubscribe later
  private onDestroy$ = new Subject<void>();

  ngOnInit() {
    // subscribe to cookieconsent observables to react to main events
    this.ccService.popupOpen$.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      this.ccService.getConfig();
    });
    this.ccService.popupClose$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.ccService.getConfig();
      });
    this.ccService.initializing$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: NgcInitializingEvent) => {
        console.log(`initializing: ${JSON.stringify(event)}`);
      });
    this.ccService.initialized$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        console.log(`initialized: ${JSON.stringify(event)}`);
      });
    this.ccService.initializationError$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: NgcInitializationErrorEvent) => {
        // the cookieconsent has failed to initialize...
        console.log(
          `initializationError: ${JSON.stringify(event.error?.message)}`,
        );
      });
    this.ccService.statusChange$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: NgcStatusChangeEvent) => {
        this.ccService.getConfig();
      });

    this.ccService.revokeChoice$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.ccService.getConfig();
      });

    this.ccService.noCookieLaw$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: NgcNoCookieLawEvent) => {
        this.ccService.getConfig();
      });
    // Support for translated cookies messages
    // this.translateService.addLangs(['en', 'fr', 'nl', 'de']);
    // this.translateService.setDefaultLang('en');
    //
    // const browserLang = this.translateService.getDefaultLang() as string;
    // this.translateService.use(
    //   browserLang.match(/en|fr|nl|de/) ? browserLang : 'en',
    // );
    this.translateService
      .get([
        'cookie.header',
        'cookie.message',
        'cookie.dismiss',
        'cookie.allow',
        'cookie.deny',
        'cookie.policy',
      ])
      .subscribe((data) => {
        const content: NgcContentOptions =
          this.ccService.getConfig().content || {};
        // Override default messages with the translated ones
        content.header = data['cookie.header'];
        content.message = data['cookie.message'];
        content.dismiss = data['cookie.dismiss'];
        content.allow = data['cookie.allow'];
        content.deny = data['cookie.deny'];
        content.policy = data['cookie.policy'];

        this.ccService.destroy(); // remove previous cookie bar (with default messages)
        this.ccService.init(this.ccService.getConfig()); // update config with translated messages
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
