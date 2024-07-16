import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateMenu',
})
export class TranslateMenuPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(items: MenuItem[]): MenuItem[] {
    return items.map((item) => {
      return {
        ...item,
        label: item.label ? this.translate.instant(item.label) : undefined,
      };
    });
  }
}
