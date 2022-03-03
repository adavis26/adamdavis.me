import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterateNTimes',
})
export class IterateNTimesPipe implements PipeTransform {
  transform(n: number): any {
    return new Array(n);
  }
}
