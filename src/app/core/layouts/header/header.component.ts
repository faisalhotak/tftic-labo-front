import { Component, computed, inject, OnInit } from '@angular/core';
import { ESSENTIAL_ROUTES } from '../../constants/routes';
import { AuthService } from '../../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NotificationService } from '../../services/notification.service';
import { ThemeService } from '../../services/theme.service';
import { COMMON } from '../../constants/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly notificationService = inject(NotificationService);

  protected readonly ESSENTIAL_ROUTES = ESSENTIAL_ROUTES;

  isLoggedIn = toSignal(this.authService.isLoggedIn$);
  isAdvertiser = toSignal(this.authService.isAdvertiser$);
  isSeeker = toSignal(this.authService.isSeeker$);

  menuItems = computed(() => {
    const isLoggedIn = this.isLoggedIn();
    const isAdvertiser = this.isAdvertiser();
    const isSeeker = this.isSeeker();

    return [
      {
        label: 'navbar.jobs',
        routerLink: '/jobs',
      },
      {
        label: 'navbar.advertiser',
        visible: isAdvertiser,
        items: [
          {
            label: 'navbar.newJob',
            routerLink: '/jobs/new',
          },
          {
            label: 'navbar.myJobs',
            routerLink: '/jobs/my-jobs',
          },
          {
            label: 'navbar.myCompanies',
            routerLink: '/companies/my-companies',
          }
        ]
      },
      {
        label: 'navbar.myApplications',
        routerLink: '/applications',
        visible: isSeeker,
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

  checked: boolean = false;
  selectedTheme: string = COMMON.light;
  themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.setTheme(this.selectedTheme);
  }

  onThemeChange(): void {
    this.themeService.setTheme(this.checked ? COMMON.dark : COMMON.light);
  }

  handleLogout() {
    this.authService.logout();

    this.notificationService.showSuccess(
      'auth.logout.success.summary',
      'auth.logout.success.detail',
    );
  }
}
