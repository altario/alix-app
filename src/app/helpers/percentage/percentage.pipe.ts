import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'perc' })

export class CustomPercentagePipe implements PipeTransform {
  transform(value: any, decimal: number = 2, icon = null) {
    return isNaN(value) ? value : (value * 100).toFixed(decimal);
  }
}
