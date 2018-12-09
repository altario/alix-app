// angular
import { Directive, ElementRef, Input, OnInit, HostBinding } from '@angular/core';
import { numericalValues } from './numerical-values.lib';

@Directive({
  selector: '[appNum]'
})
export class NumericalValuesDirective implements OnInit {
  @Input('appNum') value: any;
  @Input() isPercent: boolean;
  @Input() showUnit: boolean;
  @Input() unitClass: string;
  @Input() unitSmall: boolean;
  @Input() hcUnit: string;

  processedValue: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!isNaN(this.value)) {
      this.processedValue = numericalValues(this.value);

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
              `<small class="appNum--unit-label ${ this.unitClass ? this.unitClass : ''}">
                ${ this.processedValue.unitname ? this.processedValue.unitname : this.hcUnit ? this.hcUnit : '' }€
              </small>`
            );
          } else {
            this.el.nativeElement.insertAdjacentHTML('beforeend',
              `<span class="appNum--unit-label ${ this.unitClass ? this.unitClass : ''}">
                ${ this.processedValue.unitname ? this.processedValue.unitname : this.hcUnit ? this.hcUnit : '' }€
              </span>`
            );
          }
        }
      }

    }
  }
}
