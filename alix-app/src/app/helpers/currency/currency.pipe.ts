import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'curr' })

export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, decimal: number = 2) {
    switch (true) {
      case value < 1000000 && value >= 1000:
        return (value / 1000).toFixed(decimal);
      case value < 100000000 && value >= 1000000:
        return (value / 1000000).toFixed(decimal);
      case value >= 100000000:
        return (value / 100000000).toFixed(decimal);

      default:
        return (value / 1).toFixed(2);
    }
  }
}
