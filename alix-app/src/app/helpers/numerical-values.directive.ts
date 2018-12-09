// angular
import { Directive, ElementRef, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appNum]'
})
export class NumericalValuesDirective implements OnInit {
  @Input('appNum') value: any;
  @Input() isPercent: boolean;
  @Input() showUnit: boolean;
  @Input() unitClass: string;
  @Input() unitSmall: boolean;

  processedValue: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!isNaN(this.value)) {
      this.processedValue = this.process(this.value);
      console.log(this.processedValue)
      if (this.isPercent) {
        this.el.nativeElement.insertAdjacentHTML('afterbegin',
          `<span class="appNum--percent-value">${this.processedValue.percentualValue}</span>
           <span class="appNum--percent-label">%</span>`
        );
      } else {
        this.el.nativeElement.insertAdjacentHTML('afterbegin',
          `<span class="appNum--unit-value">${this.processedValue.round}</span>`
        );

        if (this.showUnit) {
          if (this.unitSmall) {
            this.el.nativeElement.insertAdjacentHTML('beforeend',
              `<small class="appNum--unit-label ${ this.unitClass ? this.unitClass : ''}">${ this.processedValue.unitname }</small>`
            );
          } else {
            this.el.nativeElement.insertAdjacentHTML('beforeend',
              `<span class="appNum--unit-label ${ this.unitClass ? this.unitClass : ''}">${ this.processedValue.unitname }</span>`
            );
          }
        }
      }

    }
  }

  process(value) {
    const obj: any = {};
    obj.fullValue = value;

    if (value >= 1e3 || value <= -1e3) {
      const units = ['k', 'M', 'B', 'T'];
      const unit = Math.floor((Number(value).toFixed(0).length - 1) / 3) * 3;
      obj.scaledValue = (value / Number(('1e' + unit)));
      obj.round = this.autoRound(obj.scaledValue);
      obj.unitname = units[Math.floor(unit / 3) - 1];
    }

    obj.percentualValue = this.autoRound(value * 100);

    return obj;
  }

  autoRound(value) {
    if (value >= 1e2 || value <= -1e2) {
      return this.roundTo(value, 0);
    }
    if (value >= 1e1 || value <= -1e1) {
      return this.roundTo(value, 1);
    }
    if (value >= 1e0 || value <= -1e0) {
      return this.roundTo(value, 2);
    }
    if (value < 1 && value > -1) {
      return this.roundTo(value, 2);
    }
  }

  roundTo = (num, scale) => +(Math.round(Number(num + 'e+' + scale))  + 'e-' + scale);

}
