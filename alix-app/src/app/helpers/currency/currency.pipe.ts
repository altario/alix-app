import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'curr' })

export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, decimal: number = 2) {
    console.log(value);
    switch (true) {
      case value < 1000000 && value >= 1000:
        return (value / 1000).toFixed(decimal) + 'K';
      case value < 100000000 && value >= 1000000:
        return (value / 1000000).toFixed(decimal) + 'M';
      case value >= 100000000:
        return (value / 100000000).toFixed(decimal) + 'B';

      default:
        return (value / 1).toFixed(2) + 'K';
    }
  }
}
