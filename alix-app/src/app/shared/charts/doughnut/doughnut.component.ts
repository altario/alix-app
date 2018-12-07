import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alix-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
  @Input()
  public series: any = [];

  @Input()
  public opts: any = {};

  public options: any = {};
  public initOpts: any = {};

  ngOnInit() {

    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: this.series
    };

    this.options = Object.assign(this.options, this.opts);

    this.initOpts = {
      renderer: 'canvas', // canvas | svg
    };

  }

  constructor() {
  }

}
