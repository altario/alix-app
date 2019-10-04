import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { eChartsConfig } from '@app/global/charts';
import * as moment from 'moment';
import { numericalValues } from '@app/helpers/numerical-values.lib';

@Component({
  selector: 'app-panel-dash-1',
  templateUrl: './panel-dash-1.component.html',
  styleUrls: ['./panel-dash-1.component.scss']
})
export class Paneldash1Component implements OnInit {
  modalRef: BsModalRef;
  chart;
  lineChart = {
    month: {
       values: [
          43070,
          43101,
          43132,
          43160,
          43191,
          43221,
          43252,
          43282,
          43313,
          43344,
          43374,
          43405,
          43435
       ],
       label: 'Month'
    },
    valueAtRisk: {
       values: [
          1.51267744E8,
          1.54354848E8,
          1.54354848E8,
          1.60786304E8,
          1.67485728E8,
          1.67485728E8,
          1.61043968E8,
          1.59449472E8,
          1.533168E8,
          1.533168E8,
          1.4742E8,
          1.4175E8,
          1.35E8
       ],
       label: 'Value at Risk'
    }
 }
  @Input()
  public config: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    const lineColors = ['#FFFFFF', '#00B5E9', '#7AC143'];
    this.chart = {
      opts: {},
      series: {}
    };

    this.chart.opts = {
      title: {
        show: false,
        top: '17px',
        left: '125px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: [{name: this.lineChart.month.label, icon: 'rect'}, {name: this.lineChart.valueAtRisk.label, icon: 'rect'}],
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: eChartsConfig.legend.top,
        right: '150px',
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
        data: this.lineChart.month.values.map(date => moment(this.numberToDate(date)).format('MMM YYYY')),
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: {
          formatter: (value, index) => {
            const obj = numericalValues(value);
            return `${obj.scaledValue} ${ obj.unitname }`;
          },
          color: eChartsConfig.yAxis.axisLabel.color
        },
        axisLine: {
          show: false
        }
      }
    };

    this.chart.series = [
    {
      name: this.lineChart.valueAtRisk.label,
      data: this.lineChart.valueAtRisk.values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: {...eChartsConfig.series.lineStyle, color: lineColors[3] },
      itemStyle: { color: lineColors[3] }
    }];

  }

  showModalLineChart(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
  }

  numberToDate(numberDate) {
    const date = new Date(numberDate * 24 * 60 * 60 * 1000);
    date.setFullYear(date.getFullYear() - 70);
    date.setDate(date.getDate() - 1);
    return (date);
  }
}
