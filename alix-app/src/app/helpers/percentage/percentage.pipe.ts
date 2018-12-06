import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'perc' })

export class CustomPercentagePipe implements PipeTransform {
  transform(value: any, decimal: number = 2, icon = null) {
    const val = isNaN(value) ? value : (value * 100).toFixed(decimal);

    if (icon === 'icon') {
      return !isNaN(val) ? `<span class="${ Math.sign(val) === 1 ?
        'text--success positive' : 'text--error negative' }">${ val }%</span>` : `<span>${ val }</span>`;
    }

    if (icon === 'symbol') {
      return !isNaN(val) ? `<span class="${ Math.sign(val) === 1 ?
        'text--success' : 'text--error' }">${ Math.sign(val) === 1 ? '+' + val : '-' + val }%</span>` : `<span>${ val }</span>`;
    }
    return val;
  }
}
