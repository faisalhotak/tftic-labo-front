import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { COMMON } from '../../../core/constants/common';

@Component({
  selector: 'app-light-dark-them-switch',
  templateUrl: './light-dark-them-switch.component.html',
  styleUrl: './light-dark-them-switch.component.scss',
})
export class LightDarkThemSwitchComponent implements OnInit {
  private readonly themeService: ThemeService = inject(ThemeService);
  protected checked!: boolean;

  ngOnInit() {
    this.checked = this.themeService.get() === COMMON.theme.dark;
    this.themeService.set(
      this.checked ? COMMON.theme.dark : COMMON.theme.light,
    );
  }

  onThemeChange() {
    this.themeService.set(
      this.checked ? COMMON.theme.dark : COMMON.theme.light,
    );
  }
}
