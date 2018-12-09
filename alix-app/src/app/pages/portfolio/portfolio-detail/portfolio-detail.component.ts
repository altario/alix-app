// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MockapiService } from '../../../services/mockapi.service';
import { Observable } from 'rxjs';
import { map, tap, mergeMap, filter } from 'rxjs/operators';
import { eChartsConfig } from '@app/global/charts';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  public portfolio$: Observable<any>;
  public type$: Observable<any>;
  public notification$: Observable<any>;
  public chart: any;

  constructor(private apiService: MockapiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.portfolio$ = this.route.params.pipe(
      mergeMap(params => {
        return this.apiService.getPortfolioPopulated(params.id);
      })
    );

    this.type$ = this.route.queryParams.pipe(map(params => params.type));
    this.notification$ = this.route.queryParams.pipe(
      filter(params => !!params.id),
      mergeMap(params => this.apiService.getNotificationPopulated(params.id))
    );

    this.chart = {
      opts: {},
      series: {}
    };

    this.setupChart();

  }

  setupChart() {
    this.notification$.subscribe(res => {
      const lineColors = ['#FFFFFF', '#00B5E9', '#7AC143'];
      this.chart.opts = {
        title: {
          text: res.chartName,
          top: '17px',
          left: '125',
          textStyle: eChartsConfig.title,
        },
        legend: {
          data: [res.chartName],
          itemWidth: eChartsConfig.legend.itemWidth,
          itemHeight: eChartsConfig.legend.itemHeight,
          top: eChartsConfig.legend.top,
          right: eChartsConfig.legend.right,
          textStyle: {
            fontSize: eChartsConfig.legend.fontSize,
            color: eChartsConfig.legend.color
          }
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
          data: res.chartLabels,
          splitLine: eChartsConfig.xAxis.splitLine,
          axisLabel: eChartsConfig.xAxis.axisLabel,
          axisLine: eChartsConfig.xAxis.axisLine
        },
        yAxis: {
          type: 'value',
          splitLine: eChartsConfig.yAxis.splitLine,
          axisLabel: eChartsConfig.yAxis.axisLabel,
          axisLine: {
            show: false
          }
        }
      };

      this.chart.series = [{
        name: res.chartName,
        data: res.chartValues,
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: {...eChartsConfig.series.lineStyle, color: lineColors[2] },
        itemStyle: { color: lineColors[2] }
      }];
    });
  }
}
