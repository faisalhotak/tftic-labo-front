import { Component, inject } from '@angular/core';
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

  handleLogout() {
    this.$auth.logout();

    this.$messageService.add({
      severity: 'success',
      summary: this.$translateService.instant('auth.logout.success.summary'),
      detail: this.$translateService.instant('auth.logout.success.detail'),
    });
  }
}
