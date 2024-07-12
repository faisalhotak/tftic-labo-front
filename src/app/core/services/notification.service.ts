import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

type Severity = 'success' | 'error';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly messageService = inject(MessageService);
  private readonly translateService = inject(TranslateService);

  show(
    summary: string,
    detail: string,
    severity: Severity,
    life: number = 1000,
  ) {
    this.messageService.add({
      severity,
      summary: this.translateService.instant(summary),
      detail: this.translateService.instant(detail),
      life: life,
    });
  }

  showSuccess(summary: string, detail: string) {
    this.show(summary, detail, 'success');
  }

  showError(summary: string, detail: string) {
    this.show(summary, detail, 'error', 5000);
  }
}
