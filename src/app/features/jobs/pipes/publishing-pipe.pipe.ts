import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publishingPipe'
})
export class PublishingPipePipe implements PipeTransform {

  transform(value: Date): string {
    const now = new Date();
    const diff = now.getTime() - value.getTime();
    const diffInDays = diff / (1000 * 3600 * 24);
    if (diffInDays < 1) {
      return 'Today';
    } else if (diffInDays < 2) {
      return 'Yesterday';
    } else {
      return `${Math.floor(diffInDays)} days ago`;
    }
  }

}
