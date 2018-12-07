// angular
import { Directive, ElementRef, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPosNeg]'
})
export class PositiveNegativeDirective implements OnInit {
  @Input('appPosNeg') value: any;
  @Input() icon: any;

  @HostBinding('class')
    public get getClasses(): any {
      const arr = [];

      if (!isNaN(this.value)) {
        if (this.icon === 'icon' && Math.sign(this.value) !== 0) {
          arr.push(Math.sign(this.value) === 1 ? 'text--success positive' : 'text--error negative');
        }

        if (this.icon === 'symbol' && Math.sign(this.value) !== 0) {
          arr.push(Math.sign(this.value) === 1 ? 'text--success' : 'text--error');
        }
      }

      return arr.join(' ');
    }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!isNaN(this.value)) {
      if (this.icon === 'symbol' && Math.sign(this.value) !== 0) {
        this.el.nativeElement.insertAdjacentHTML('afterbegin', Math.sign(this.value) === 1 ? '+' : '-');
      }
      this.el.nativeElement.insertAdjacentHTML('beforeend', '%');
    }
  }

}
