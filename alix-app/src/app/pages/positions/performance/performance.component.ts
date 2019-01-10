// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset1 from '@data/dossier1/dataset';
import * as dataset2 from '@data/dossier2/dataset';

// services
import { DossiersCommunicationService } from '@services/dossiers-communication.service';
import { eChartsConfig } from '@app/global/charts';
import { numericalValues } from '@helpers/numerical-values.lib';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  public config: object;
  public dossier: object;
  public opts: any = {
    totalFootFallYear: {}
  };

  public isRealEstate = false;
  public isRetail = false;

  constructor(private route: ActivatedRoute, private dossierCommService: DossiersCommunicationService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if ((this.route as any)._routerState.snapshot.url.indexOf('/4/') !== -1) {
        console.log('RETAIL');
        this.isRetail = true;
        this.config = dataset2.dossier2MainData;
      } else {
        console.log('REAL_ESTATE');
        this.isRealEstate = true;
        this.config = dataset1.dossier1MainData;
      }
    });
  }

  totalFootFallYear = () => {
    const lineColors = ['#FFFFFF', '#00B5E9', '#7AC143'];
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function(value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };

    this.opts.totalFootFallYear = {
      title: {
        text: 'TOTAL FOOTFALL YEAR', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title
      },
      legend: {
        enable: false,
        data: [
          {
            name: 'TOTAL FOOTFALL YEAR',
            icon: 'rect'
          }
        ],
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: eChartsConfig.legend.top,
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      grid: eChartsConfig.grid,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: params => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color =>
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
            color +
            '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez +=
              colorSpan(item.color) +
              ' ' +
              item.seriesName +
              ': ' +
              processedValue.round +
              ' ' +
              (processedValue.unitname ? processedValue.unitname + '€' : '') +
              '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        data: [
          'Dec 2017',
          'Jan 2018',
          'Feb 2018',
          'Mar 2018',
          'Apr 2018',
          'May 2018',
          'Jun 2018',
          'Jul 2018',
          'Aug 2018',
          'Sep 2018',
          'Oct 2018',
          'Nov 2018',
          'Dec 2018'
        ],
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: axisyLabel,
        axisLine: {
          show: false
        }
      }
    };

    return [
      {
        data: [6123, 4776, 4967, 4718, 5426, 6239, 5615, 5503, 5667, 6800, 5780, 5607, 8690],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[1] },
        itemStyle: { color: lineColors[1] }
      }
    ];
  }

  totalFootFallLastYear = () => {
    const lineColors = ['#FFFFFF', '#00B5E9', '#7AC143'];
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function(value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };

    this.opts.totalFootFallLastYear = {
      title: {
        enable: false
      },
      legend: {
        enable: false,
        data: [
          {
            name: 'TOTAL FOOTFALL LAST YEAR',
            icon: 'rect'
          }
        ],
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: eChartsConfig.legend.top,
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      grid: eChartsConfig.grid,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: params => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color =>
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
            color +
            '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez +=
              colorSpan(item.color) +
              ' ' +
              item.seriesName +
              ': ' +
              processedValue.round +
              ' ' +
              (processedValue.unitname ? processedValue.unitname + '€' : '') +
              '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        data: [
          'Dec 2016',
          'Jan 2017',
          'Feb 2017',
          'Mar 2017',
          'Apr 2017',
          'May 2017',
          'Jun 2017',
          'Jul 2017',
          'Aug 2017',
          'Sep 2017',
          'Oct 2017',
          'Nov 2017',
          'Dec 2017'
        ],
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: axisyLabel,
        axisLine: {
          show: false
        }
      }
    };

    return [
      {
        data: [4357, 3399, 3520, 3341, 3848, 4398, 3919, 3836, 3954, 4652, 3924, 3799, 6123],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[2] },
        itemStyle: { color: lineColors[2] }
      }
    ];
  }


  /**
   * TBD
   */
  averageTimeInStore = () => {
    const lineColors = ['#FFFFFF', '#00B5E9', '#7AC143'];
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function(value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };

    this.opts.averageTimeInStore = {
      title: {
        enable: false
      },
      legend: {
        enable: false,
        data: [
          {
            name: 'TOTAL FOOTFALL YEAR',
            icon: 'rect'
          }
        ],
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: eChartsConfig.legend.top,
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      grid: eChartsConfig.grid,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: params => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color =>
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
            color +
            '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez +=
              colorSpan(item.color) +
              ' ' +
              item.seriesName +
              ': ' +
              processedValue.round +
              ' ' +
              (processedValue.unitname ? processedValue.unitname + '€' : '') +
              '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        data: [
          'Dec 2017',
          'Jan 2018',
          'Feb 2018',
          'Mar 2018',
          'Apr 2018',
          'May 2018',
          'Jun 2018',
          'Jul 2018',
          'Aug 2018',
          'Sep 2018',
          'Oct 2018',
          'Nov 2018',
          'Dec 2018'
        ],
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: axisyLabel,
        axisLine: {
          show: false
        }
      }
    };

    return [
      {
        data: [6123, 4776, 4967, 4718, 5426, 6239, 5615, 5503, 5667, 6800, 5780, 5607, 8690],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[1] },
        itemStyle: { color: lineColors[1] }
      }
    ];
  }

  customersDistributionPie = () => {
    this.opts.customersDistributionPie = {
      title: {
        text: 'Customers Distribution', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title
      },
      color: ['#00B5E9', '#7AC143', '#C7DA2C', '#F2E603', '#FCB86B', '#E9545C']
    };

    return [
      {
        name: 'Customers Distribution',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '16',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 0.25, name: 'Retained Customers' },
          { value: 0.65, name: 'Sporadic Customers' },
          { value: 0.1, name: 'New Customers' }
        ]
      }
    ];
  }

  customersDistribution = () => {
    const lineColors = ['#FFFFFF', '#00B5E9', '#7AC143'];
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function(value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };

    this.opts.customersDistribution = {
      title: {
        enable: false
      },
      legend: {
        data: [
          {
            name: 'Retained Customers',
            icon: 'rect'
          },
          {
            name: 'Sporadic Customers',
            icon: 'rect'
          },
          {
            name: 'New Customers',
            icon: 'rect'
          }
        ],
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: eChartsConfig.legend.top,
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      grid: eChartsConfig.grid,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: params => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color =>
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
            color +
            '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez +=
              colorSpan(item.color) +
              ' ' +
              item.seriesName +
              ': ' +
              processedValue.round +
              ' ' +
              (processedValue.unitname ? processedValue.unitname + '€' : '') +
              '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        data: [
          'Dec 2016',
          'Jan 2017',
          'Feb 2017',
          'Mar 2017',
          'Apr 2017',
          'May 2017',
          'Jun 2017',
          'Jul 2017',
          'Aug 2017',
          'Sep 2017',
          'Oct 2017',
          'Nov 2017',
          'Dec 2017'
        ],
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: axisyLabel,
        axisLine: {
          show: false
        }
      }
    };

    return [
      {
        name: 'Retained Customers',
        data: [6123, 4776, 4967, 4718, 5426, 6239, 5615, 5503, 5667, 6800, 5780, 5607, 8690],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[0] },
        itemStyle: { color: lineColors[0] },
        stack: 'one',
        areaStyle: {}
      },
      {
        name: 'Sporadic Customers',
        data: [4357, 3399, 3520, 3341, 3848, 4398, 3919, 3836, 3954, 4652, 3924, 3799, 6123],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[1] },
        itemStyle: { color: lineColors[1] },
        stack: 'one',
        areaStyle: {}
      },
      {
        name: 'New Customers',
        data: [2357, 1399, 1520, 1341, 1848, 1398, 1919, 1836, 1954, 2652, 1924, 1799, 4123],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[2] },
        itemStyle: { color: lineColors[2] },
        stack: 'one',
        areaStyle: {}
      }
    ];
  }

  weekavgpeaks = () => {
    this.opts.weekavgpeaks = {
      title: {
        enable: false
      },

      calculable: true,
      legend: {
        data: ['Morning - 6.00 am > 12.00 PM', 'Afternoon - 12.01 am > 5.00 PM', 'Evening - 5.01 am > 6.30 PM'],
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: eChartsConfig.legend.top,
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      xAxis: {
        type: 'category',
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine,
        axisTick: { show: false },
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
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

    const lineColors = { radius1Km: '#913BAF', portaNuova: '#F26D4F', milano: '#BF5E5E' };

    return [
      {
        name: 'Morning - 6.00 am > 12.00 PM',
        data: [400, 220, 100, 200, 250, 700, 450],
        type: 'bar',
        barGap: 0,
        color: lineColors['radius1Km']
      },
      {
        name: 'Afternoon - 12.01 am > 5.00 PM',
        data: [300, 250, 60, 250, 280, 180, 100],
        type: 'bar',
        barGap: 0,
        color: lineColors['portaNuova']
      },
      {
        name: 'Evening - 5.01 am > 6.30 PM',
        data: [250, 40, 20, 150, 60, 10, 10],
        type: 'bar',
        barGap: 0,
        color: lineColors['milano']
      }
    ];
  }

  weekdaypeaks = () => {
    const lineColors = ['#FFFFFF', '#00B5E9', '#7AC143'];
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function(value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };

    this.opts.weekdaypeaks = {
      title: {
        enable: false
      },
      legend: {
        data: [
          {
            name: 'Morning - 6.00 am > 12.00 PM',
            icon: 'rect'
          },
          {
            name: 'Afternoon - 12.01 am > 5.00 PM',
            icon: 'rect'
          },
          {
            name: 'Evening - 5.01 am > 6.30 PM',
            icon: 'rect'
          }
        ],
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: eChartsConfig.legend.top,
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      grid: eChartsConfig.grid,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: params => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color =>
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
            color +
            '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez +=
              colorSpan(item.color) +
              ' ' +
              item.seriesName +
              ': ' +
              processedValue.round +
              ' ' +
              (processedValue.unitname ? processedValue.unitname + '€' : '') +
              '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        data: [
          'Dec 2016',
          'Jan 2017',
          'Feb 2017',
          'Mar 2017',
          'Apr 2017',
          'May 2017',
          'Jun 2017',
          'Jul 2017',
          'Aug 2017',
          'Sep 2017',
          'Oct 2017',
          'Nov 2017',
          'Dec 2017'
        ],
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: axisyLabel,
        axisLine: {
          show: false
        }
      }
    };

    return [
      {
        name: 'Morning - 6.00 am > 12.00 PM',
        data: [2357, 1399, 1520, 1341, 1848, 1398, 1919, 1836, 1954, 2652, 1924, 1799, 4123],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[0] },
        itemStyle: { color: lineColors[0] },
        stack: 'one',
        areaStyle: {}
      },
      {
        name: 'Afternoon - 12.01 am > 5.00 PM',
        data: [4357, 3399, 3520, 3341, 3848, 4398, 3919, 3836, 3954, 4652, 3924, 3799, 6123],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[1] },
        itemStyle: { color: lineColors[1] },
        stack: 'one',
        areaStyle: {}
      },
      {
        name: 'Evening - 5.01 am > 6.30 PM',
        data: [6123, 4776, 4967, 4718, 5426, 6239, 5615, 5503, 5667, 6800, 5780, 5607, 8690],
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[2] },
        itemStyle: { color: lineColors[2] },
        stack: 'one',
        areaStyle: {}
      }
    ];
  }
}
