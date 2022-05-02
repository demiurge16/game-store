import { Pipe, PipeTransform } from '@angular/core';
import { Platform } from './models/platform';

@Pipe({
  name: 'platforms'
})
export class PlatformsPipe implements PipeTransform {

  transform(value: Platform[], ...args: unknown[]): unknown {
    return value.map(p => p.name).join(', ');
  }

}
