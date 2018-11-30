import { Component, OnInit, Input } from '@angular/core';

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

  public options: any = {};
  public initOpts: any = {};

  ngOnInit() {

    this.options = {
      xAxis: {},
      yAxis: {},
      series: this.series
    };

    this.options = Object.assign(this.options, this.opts);

    this.initOpts = {
      renderer: 'svg',
    };

  }

  constructor() {
  }

}
