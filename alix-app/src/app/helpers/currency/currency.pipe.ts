import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'curr' })

export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, decimal: number = 2) {
    // switch (true) {
    //   case value < 1000000 && value >= 1000:
    //     return (value / 1000).toFixed(decimal);
    //   case value < 100000000 && value >= 1000000:
    //     return (value / 1000000).toFixed(decimal);
    //   case value >= 100000000:
    //     return (value / 100000000).toFixed(decimal);

    //   default:
    //     return (value / 1).toFixed(2);
    // }

    if (value === null) { return null; } // terminate early
    if (value === 0) { return '0'; } // terminate early

    const b = Math.abs(value).toPrecision(2).split('e'); // get power
    // console.log(typeof b)
    const k = b.length === 1 ? 0 : Math.floor(Math.min(parseInt(b[1].slice(1), 10), 14) / 3); // floor at decimals, ceiling at trillions
    const c = k < 1 ? value.toFixed(0 + decimal) : (value / Math.pow(10, k * 3) ).toFixed(1 + decimal); // divide by power
    const d = parseInt(c, 10) < 0 ? c : Math.abs(parseInt(c, 10)); // enforce -0 is 0
    const e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power

    return e;
  }
}
