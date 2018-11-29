import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options, ChangeContext, PointerType } from 'ng5-slider';

@Component({
  selector: 'app-slider-range',
  templateUrl: './slider-range.component.html',
  styleUrls: ['./slider-range.component.scss']
})
export class SliderRangeComponent implements OnInit {
  @Output()
  callback = new EventEmitter();

  minValue = 10;
  maxValue = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };

  constructor() { }

  ngOnInit() {
  }

  onChangeValue(changeContext: ChangeContext) {
    this.callback.emit(changeContext);
  }
}
