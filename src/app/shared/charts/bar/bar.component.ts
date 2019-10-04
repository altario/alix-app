// angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alix-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input()
  public series: any = [];

  @Input()
  public opts: any = {};

  @Input()
  public init: any = [];

  public options: any = {};
  public initOpts: any = {};

  @Output()
  public chartInit = new EventEmitter();

  ngOnInit() {

    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      series: this.series
    };


    this.options = Object.assign(this.options, this.opts);

    this.initOpts = {
      renderer: 'canvas', // canvas | svg
    };

    this.initOpts = Object.assign(this.initOpts, this.init);
  }

  constructor() {
  }
  onChartInit(e) {
    this.chartInit.emit(e);
  }
}
