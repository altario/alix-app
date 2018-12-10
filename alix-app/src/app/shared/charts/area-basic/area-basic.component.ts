import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alix-area-basic',
  templateUrl: './area-basic.component.html',
  styleUrls: ['./area-basic.component.scss']
})
export class AreaBasicComponent implements OnInit {

  @Input()
  public series: any = [];

  @Input()
  public opts: any = {};

  @Output()
  public chartInit = new EventEmitter();

  public options: any = {};
  public initOpts: any = {};

  ngOnInit() {

    this.options = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: this.series
    };

    this.options = Object.assign(this.options, this.opts);
    this.options.yAxis.scale = true;

    this.initOpts = {
      renderer: 'canvas', // canvas | svg
    };
  }

  constructor() {

  }

  onChartInit(e) {
    this.chartInit.emit(e);
  }

}
