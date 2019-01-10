import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// graph color overrides
import * as eChartsConfig from '@global/charts';

@Component({
  selector: 'alix-area-stack',
  templateUrl: './area-stack.component.html',
  styleUrls: ['./area-stack.component.scss']
})
export class AreaStackComponent implements OnInit {
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
      title: {
        text: '堆叠区域图'
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
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
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

}
