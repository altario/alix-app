import { Component, OnInit, Input } from '@angular/core';

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
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    };

    this.options = Object.assign(this.options, this.opts);

    this.initOpts = {
      renderer: 'svg',
    };
  }

  constructor() {

  }

}
