import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationPipe'
})
export class LocationPipePipe implements PipeTransform {

  transform(value: string ): string {
    return value.split(' ').slice(1).join(' ');
  }

}
