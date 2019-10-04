import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Options, ChangeContext, PointerType } from 'ng5-slider';

@Component({
  selector: 'app-slider-range',
  templateUrl: './slider-range.component.html',
  styleUrls: ['./slider-range.component.scss']
})
export class SliderRangeComponent implements OnInit {

  @Output()
  callback = new EventEmitter();

  @Input()
  value: any = 0;

  @Input()
  steps: any = [];

  options: Options = {
    stepsArray: [],
    showTicks: true,
    showSelectionBar: true
  };

  constructor() { }

  ngOnInit() {

      this.options.stepsArray = this.steps.map(step => {
          return {value: step};
      });
  }

  onChangeValue(changeContext: ChangeContext) {
    this.callback.emit(changeContext);
  }
}
