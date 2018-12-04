import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alix-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Input()
  public series: any = [];

  @Input()
  public opts: any = {};

  @Output()
  public chartInit = new EventEmitter();

  public options: any = {};
  public initOpts: any = {};

  constructor() { }

  ngOnInit() {
    this.options = {

      legend: {
        data: ['Linha 1', 'Linha 2']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: this.series
    };

    this.options = Object.assign(this.options, this.opts);

    this.initOpts = {
      renderer: 'svg',
    };
  }

  onChartInit(e) {
    this.chartInit.emit(e);
  }

}
