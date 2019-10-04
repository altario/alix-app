import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cusdate' })

export class CustomDateConverterPipe implements PipeTransform {
  transform(value: number) {
    return this.numberToDate(value);
  }

  numberToDate(numberDate) {
    const date = new Date(numberDate * 24 * 60 * 60 * 1000);
    date.setFullYear(date.getFullYear() - 70);
    date.setDate(date.getDate() - 1);
    return (date);
  }
}
