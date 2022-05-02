import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from './models/genre';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {

  transform(value: Genre[], ...args: unknown[]): unknown {
    return value.map(g => g.name).join(', ');
  }

}
