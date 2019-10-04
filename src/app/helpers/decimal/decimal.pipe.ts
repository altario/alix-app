import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dec' })

export class CustomDecimalPipe implements PipeTransform {
  transform(value: number, decimal: number = 2) {
    let output;
    if (decimal === 0) {
      output = isNaN(value) ? value : value.toString().split('.')[0];
    } else {
      output = isNaN(value) ? value : value.toString().split('.')[0] + '.' + value.toString().split('.')[1].substr(0, decimal);
    }
    return output;
  }
}
