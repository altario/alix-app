// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public config: any;
  public vehicleValues: Array<any>;
  public selectedVehicleYear: object;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      this.config = dataset.dossiersMainData.dossier1.location;
      this.vehicleValues = this.initVehiclesValues();
      this.selectedVehicleYear = this.config.vehicles.years[this.vehicleValues[0]];
      console.log(this.config);
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
          if (population != 'year') {
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
      if ( population != 'year' ) {
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
        data: Object.keys(chartdataset.dossier1ChartsData.location.percentageAccommByPricePerRoom).map((population, i) => {
            return population;
        }),
        align: 'left'
      },
      xAxis: {
        type: 'category',
        axisTick: { show: false },
        data: Object.keys(chartdataset.dossier1ChartsData.location.percentageAccommByPricePerRoom).map((population, i) => {
          return population;
        })
      },
      yAxis: {
        type: 'value'
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

        return {
          name: population,
          barGap: 0,
          type: 'bar',
          label: labelOption,
          data: chartdataset.dossier1ChartsData.location.percentageAccommByPricePerRoom[population].values
        };

    });
  }
}
