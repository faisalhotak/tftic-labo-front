import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  ngOnInit() {
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
      this.ccService.getConfig();
    });
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {
      this.ccService.getConfig();
    });
    this.initializingSubscription = this.ccService.initializing$.subscribe(
      (event: NgcInitializingEvent) => {
        console.log(`initializing: ${JSON.stringify(event)}`);
      },
    );
    this.initializedSubscription = this.ccService.initialized$.subscribe(() => {
      console.log(`initialized: ${JSON.stringify(event)}`);
    });
    this.initializationErrorSubscription =
      this.ccService.initializationError$.subscribe(
        (event: NgcInitializationErrorEvent) => {
          // the cookieconsent has failed to initialize...
          console.log(
            `initializationError: ${JSON.stringify(event.error?.message)}`,
          );
        },
      );
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        this.ccService.getConfig();
      },
    );

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        this.ccService.getConfig();
      },
    );

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        this.ccService.getConfig();
      },
    );
    // Support for translated cookies messages
    this.translateService.addLangs(['en', 'fr', 'nl', 'de']);
    this.translateService.setDefaultLang('en');

    const browserLang = this.translateService.getBrowserLang() as string;
    this.translateService.use(
      browserLang.match(/en|fr|nl|de/) ? browserLang : 'en',
    );

    this.translateService
      .get([
        'cookie.header',
        'cookie.message',
        'cookie.dismiss',
        'cookie.allow',
        'cookie.deny',
        'cookie.cookiePolicyLink',
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
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
