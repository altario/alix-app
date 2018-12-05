import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alix-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnInit {
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
      xAxis: {},
      yAxis: {},
      series: this.series
    };

    this.options = Object.assign(this.options, this.opts);
    console.log(this.options);
    this.initOpts = {
      renderer: 'svg',
    };

  }

  constructor() {
  }
  onChartInit(e) {
    this.chartInit.emit(e);
  }
}
