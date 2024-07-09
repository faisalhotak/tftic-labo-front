import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'publishingPipe',
  pure: false,
})
export class PublishingPipe implements PipeTransform {
  private readonly translate = inject(TranslateService);

  transform(value: Date): string {
    const now = new Date();
    const diff = now.getTime() - value.getTime();
    const diffInDays = diff / (1000 * 3600 * 24);

    if (diffInDays < 1) {
      return this.translate.instant('job.today');
    }

    if (diffInDays < 2) {
      return this.translate.instant('job.yesterday');
    }

    return `${Math.floor(diffInDays)} days ago`;
  }
}
