import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'perc' })

export class CustomPercentagePipe implements PipeTransform {
  transform(value: number, decimal: number = 2) {
    return (value * 100).toFixed(decimal);
  }
}
