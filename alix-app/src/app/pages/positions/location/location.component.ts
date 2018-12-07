// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';

// graph color overrides
import { eChartsConfig } from '@global/charts';
import * as plotchartdataset from '@data/plotcharts-dataset';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public config: any;
  public vehicleValues: Array<any>;
  public selectedVehicleYear: object;

  lat: number = 45.4758422;
  lng: number = 9.1911364;
  zoom = 14;
  radius = 70;
  opts: any = {};

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
        data: Object.keys(chartdataset.dossier1ChartsData.location.breakdownAssetsInNeighborhood).map((population, i) => {
          if (population !== 'year') {
            return population;
          }
        }),
        align: 'left'
      },
      xAxis: {
        type: 'category',
        data: chartdataset.dossier1ChartsData.location.breakdownAssetsInNeighborhood.year.values
      },
      yAxis: {
        type: 'value'
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
    this.opts.scpVehiclesRad = {
      grid: {
        left: 100,
        right: eChartsConfig.grid.right
      },
      legend: {
        data: [
          { name: 'Commercial', icon: 'rect' },
          { name: 'Standard', icon: 'rect' },
          { name: 'Family', icon: 'rect' },
          { name: 'Mini', icon: 'rect' },
          { name: 'Motorcycle', icon: 'rect' },
          { name: 'Luxury', icon: 'rect' },
          { name: 'Sport', icon: 'rect' }
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
      xAxis: {
        type: 'value',
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: eChartsConfig.yAxis.axisLabel,
        axisLine: eChartsConfig.yAxis.axisLine
      }
    };

    const series = plotchartdataset.dossier1PlotChartsData.stateOfConservation.scpPriceEvo.filter((line) => {
      if (line.population === 'population1') {
        return line;
      }
    });

    return series.shift().values;
  }
}
