// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';

// graph color overrides
import { eChartsConfig } from '@global/charts';
import { dossier1PlotChartsData } from '@data/plotcharts-dataset';
import { mapStyle } from '@global/map';
import { numericalValues } from '@helpers/numerical-values.lib';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public config: any;
  public vehicleValues: Array<any>;
  public selectedVehicleYear: object;
  public chartInstance: any;

  lat: number = 45.4758422;
  lng: number = 9.1911364;
  zoom = 14;
  radius = 70;
  opts: any = {};
  style1 = mapStyle;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      this.config = dataset.dossiersMainData.dossier1.location;
      this.vehicleValues = this.initVehiclesValues();
      this.selectedVehicleYear = this.config.vehicles.years[this.vehicleValues[0]];
    });
  }

  changeVehicleYearValue(callbackEvent) {
    this.selectedVehicleYear = this.config.vehicles.years[callbackEvent.value];
  }

  initVehiclesValues(): Array<any> {
    // Just incase... This is to get the last object of the years object. [0]
    // &&
    // the array of years to populte the slider [1]
    return [
      Object.keys(this.config.vehicles.years)[
      Object.keys(this.config.vehicles.years).length - 1],
      Object.keys(this.config.vehicles.years)
    ];
  }

  getbreakdownAssetsInNeighborhoodOpts() {

    return {
      legend: {
        show: false,
        data: Object.keys(chartdataset.dossier1ChartsData.location.breakdownAssetsInNeighborhood)
          .map((population, i) => population !== 'year' ? population : null),
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: '20px',
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      xAxis: {
        type: 'category',
        data: chartdataset.dossier1ChartsData.location.breakdownAssetsInNeighborhood.year.values,
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine,
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.4)',
            type: 'dashed'
          }
        },
      }
    };
  }

  getbreakdownAssetsInNeighborhoodSeries(): Array<any> {

    return Object.keys(chartdataset.dossier1ChartsData.location.breakdownAssetsInNeighborhood).map((population, i) => {
      if (population !== 'year') {
        return {
          name: population,
          type: 'bar',
          stack: 'one',
          label: {
            normal: {
              show: false,
              position: 'insideRight'
            }
          },
          data: chartdataset.dossier1ChartsData.location.breakdownAssetsInNeighborhood[population].values
        };
      }
    });
  }

  getpercentageAccommByPricePerRoomOpts() {

    return {
      color: ['#003366', '#006699', '#4cabce', '#e5323e'],
      calculable: true,
      legend: {
        show: false,
        data: Object.keys(chartdataset.dossier1ChartsData.location.percentageAccommByPricePerRoom).map((population, i) => {
          return population;
        }),
        align: 'left'
      },
      xAxis: {
        type: 'category',
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine,
        axisTick: { show: false },
        data: chartdataset.dossier1ChartsData.location.percentageAccommByPricePerRoom.pricePerNight.values.map((population, i) => {
          return '>' + population + '€';
        })
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: eChartsConfig.yAxis.axisLabel
      }
    };
  }

  getpercentageAccommByPricePerRoomSeries(): Array<any> {
    const config = {
      rotate: 90,
      align: 'left',
      verticalAlign: 'middle',
      position: 'insideBottom',
      distance: 15,
    };

    const labelOption = {
      normal: {
        show: true,
        position: config.position,
        distance: config.distance,
        align: config.align,
        verticalAlign: config.verticalAlign,
        rotate: config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
          name: {
            textBorderColor: '#fff'
          }
        }
      }
    };

    return Object.keys(chartdataset.dossier1ChartsData.location.percentageAccommByPricePerRoom).map((population, i) => {
      if (population != 'pricePerNight') {
        return {
          name: population,
          barGap: 0,
          type: 'bar',
          label: labelOption,
          data: chartdataset.dossier1ChartsData.location.percentageAccommByPricePerRoom[population].values
        };
      }

    });
  }

  getscpVehiclesRad() {
    const labels = [
      { name: 'Commercial', icon: 'rect' },
      { name: 'Standard', icon: 'rect' },
      { name: 'Family', icon: 'rect' },
      { name: 'Mini', icon: 'rect' },
      { name: 'Motorcycle', icon: 'rect' },
      { name: 'Luxury', icon: 'rect' },
      { name: 'Sport', icon: 'rect' }
    ];


    this.opts.scpVehiclesRad = {
      // grid: {
      //   left: 100,
      //   right: eChartsConfig.grid.right
      // },
      grid: {
        left: '20%',
        top: '20%'
      },
      legend: {
        data: labels,
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: '55px',
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      xAxis: {
        type: 'value',
        name: 'Year',
        nameTextStyle: {
          color: '#FFFFFF',
          padding: [10, 0, 0, 0]
        },
        nameLocation: 'center',
        splitLine: {
          show: false
        },
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: {
          show: false
        },
        scale: true
      },
      yAxis: {
        type: 'value',
        name: 'Price Range',
        nameTextStyle: {
          color: '#FFFFFF',
          padding: [0, 125, 0, 0]
        },
        nameLocation: 'end',
        offset: 20,
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: {
          color: eChartsConfig.yAxis.axisLabel.color,
          formatter: function (value, index) {
            const processedValue = numericalValues(value);
            return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname +'€' : '');
          }
        },
        axisLine: {
          show: false
        }
      }
    };

    const series = dossier1PlotChartsData.location.scpVehiclesRad
      .reduce((prev, next) => {
        if (next.population === 'population1') {
          next.values.map((value, idx) => {
            prev.push(value);
          });
        }

        return prev;
      }, []);

    return series;
  }

  streetConditionsTimeEvoRad() {
    const labels = [
      { name: 'Commercial', icon: 'rect' },
      { name: 'Standard', icon: 'rect' },
      { name: 'Family', icon: 'rect' },
      { name: 'Mini', icon: 'rect' },
      { name: 'Motorcycle', icon: 'rect' },
      { name: 'Luxury', icon: 'rect' },
      { name: 'Sport', icon: 'rect' }
    ];

    const yLabels = ['Bad', 'Needs Renovation', 'Renovated', 'Excellent'];

    this.opts.streetConditionsTimeEvoRad = {
      // grid: {
      //   left: 100,
      //   right: eChartsConfig.grid.right
      // },
      grid: {
        left: '20%',
        top: '20%'
      },
      legend: {
        data: labels,
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: '55px',
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      xAxis: {
        type: 'value',
        name: 'Year',
        nameTextStyle: {
          color: '#FFFFFF',
          padding: [10, 0, 0, 0]
        },
        nameLocation: 'center',
        splitLine: {
          show: false
        },
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: {
          show: false
        },
        scale: true
      },
      yAxis: {
        type: 'value',
        offset: 20,
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: {
          color: eChartsConfig.yAxis.axisLabel.color,
          formatter: (value, index) => {
            return index == 0 ? 0 : yLabels[index - 1];
          }
        },
        axisLine: {
          show: false
        }
      }
    };

    const series = dossier1PlotChartsData.location.streetConditionsTimeEvoRad
      .reduce((prev, next) => {
        if (next.population === 'population1') {
          next.values.map((value, idx) => {
            prev.push(value);
          });
        }

        return prev;
      }, []);

    return series;
  }

  daynightShiftRad() {
    const labels = [
      { name: 'Commercial', icon: 'rect' },
      { name: 'Standard', icon: 'rect' },
      { name: 'Family', icon: 'rect' },
      { name: 'Mini', icon: 'rect' },
      { name: 'Motorcycle', icon: 'rect' },
      { name: 'Luxury', icon: 'rect' },
      { name: 'Sport', icon: 'rect' }
    ];

    const yLabels = ['6 AM', '1 PM', '9 PM', '12 AM','5 AM'];

    this.opts.daynightShiftRad = {
      // grid: {
      //   left: 100,
      //   right: eChartsConfig.grid.right
      // },
      grid: {
        left: '20%',
        top: '20%'
      },
      legend: {
        data: labels,
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: '55px',
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      xAxis: {
        type: 'value',
        name: 'Year',
        nameTextStyle: {
          color: '#FFFFFF',
          padding: [10, 0, 0, 0]
        },
        nameLocation: 'center',
        splitLine: {
          show: false
        },
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: {
          show: false
        },
        scale: true
      },
      yAxis: {
        type: 'value',
        name: 'Price Range',
        nameTextStyle: {
          color: '#FFFFFF',
          padding: [0, 125, 0, 0]
        },
        nameLocation: 'end',
        offset: 20,
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: {
          color: eChartsConfig.yAxis.axisLabel.color,
          formatter: (value, index) => {
            return index == 0 ? 0 : yLabels[index - 1];
          }
        },
        axisLine: {
          show: false
        }
      }
    };

    const series = dossier1PlotChartsData.location.daynightShiftRad
      .reduce((prev, next) => {
        if (next.population === 'population1') {
          next.values.map((value, idx) => {
            prev.push(value);
          });
        }

        return prev;
      }, []);

    return series;
  }

  onChartInit(chart, e) {
    this.chartInstance[chart] = e;
  }
}
