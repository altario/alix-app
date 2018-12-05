import { Component, OnInit, Output } from '@angular/core';

// dataset
import * as dashboardDataset from '@data/dashboard-dataset';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opts: any;

  public config: any;
  public kpis: any;
  public chartInstance: any = {};

  constructor() {

    this.config = dashboardDataset;
    this.kpis = this.config.dashboard1.mainKpis[0].allIndustries;
  }

  ngOnInit() {

    this.opts = {
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
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['AAA','AA+','AA','AA-','A+','A','A-','BBB+','BBB','BBB-','BB+','BB']
      },
    };
  }

  getexposurePerformanceBoxPlot(population= 'allIndustries'): Array<any>{

    const kpis = this.config.dashboard1.exposurePerformanceBoxPlot.filter((line, i) => {
      if (line.industry === population) {
        return true;
      }
    });

    const series = kpis.shift().series;
    return series;
  }

  getratingPerformance(population = 'allIndustries'): Array<any> {

    const kpis = this.config.dashboard1.ratingPerformance.filter((line, i) => {
      if (line.industry === population) {
        return true;
      }
    });

    const series = kpis.shift().series;
    return series;
  }


  onChartClick(chartLine) {

    const key = chartLine.data.id;
    const kpis = this.config.dashboard1.mainKpis.filter((line, i) =>{
        const k = Object.keys(line);
      if (line[k].population.id === key) {
        return true;
      }
    });

    if (kpis.length) {
      const data = kpis.shift();
      this.kpis = data[Object.keys(data)[0]];
      console.log(this.chartInstance);
      this.chartInstance.exposurePerformanceBoxPlot.setOption({
        series: this.getexposurePerformanceBoxPlot(key)
      });

      this.chartInstance.ratingPerformance.setOption({
        series: this.getratingPerformance(key)
      });
    }
  }

  onChartInit(chart, e) {
    console.log(this.chartInstance);
    this.chartInstance[chart] = e;
  }
}
