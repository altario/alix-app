import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'curr' })

export class CustomCurrencyPipe implements PipeTransform {
  transform(value: string) {
    const val = parseInt(value, 10);
    // console.log(val);
    switch (true) {
      case val >= 1000:
        return (val / 1000).toFixed(2).replace(/\.0$/, '') + 'K';
      case val >= 1000000:
        return (val / 1000000).toFixed(2).replace(/\.0$/, '') + 'M';
      case val >= 1000000000:
        return (val / 1000000000).toFixed(2).replace(/\.0$/, '') + 'B';

      default:
        break;
    }
  }
}
