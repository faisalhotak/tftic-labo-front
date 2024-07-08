import { Component, computed, effect, inject, signal } from '@angular/core';
import { ESSENTIAL_ROUTES, FEATURE_ROUTES } from '../../constants/routes';
import { AuthService } from '../../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly $auth = inject(AuthService);
  private readonly $translateService = inject(TranslateService);
  private readonly $messageService = inject(MessageService);

  protected readonly ESSENTIAL_ROUTES = ESSENTIAL_ROUTES;
  protected readonly FEATURE_ROUTES = FEATURE_ROUTES;
  protected readonly isConnected = toSignal(this.$auth.isLoggedIn$);

  isLoggedIn = toSignal(this.$auth.isLoggedIn$);

  menuItems = computed(() => {
    const isLoggedIn = this.isLoggedIn();
    return [
      {
        label: 'navbar.jobs',
        routerLink: '/jobs',
      },
      {
        label: 'navbar.logIn',
        routerLink: '/auth/login',
        styleClass: 'p-button-secondary',
        visible: !isLoggedIn,
      },
      {
        label: 'navbar.signUp',
        routerLink: '/auth/register',
        styleClass: 'p-button-primary',
        visible: !isLoggedIn,
      },
      {
        label: 'navbar.profile',
        routerLink: '/profile',
        visible: isLoggedIn,
      },
      {
        label: 'navbar.logOut',
        command: () => this.handleLogout(),
        styleClass: 'p-button-primary',
        visible: isLoggedIn,
      },
    ].filter((item) => item.visible !== false);
  });

  selectedOption = signal<'en' | 'fr' | 'nl' | 'de'>('en');

  dropdownOptions = ['en', 'fr', 'nl', 'de'];

  selectEffect = effect(() => {
    const selected = this.selectedOption();
    console.log(selected);
    this.$translateService.use(selected);
  });

  handleLogout() {
    this.$auth.logout();

    this.$messageService.add({
      severity: 'success',
      summary: this.$translateService.instant('auth.logout.success.summary'),
      detail: this.$translateService.instant('auth.logout.success.detail'),
    });
  }

  protected readonly encodeURI = encodeURI;
}
