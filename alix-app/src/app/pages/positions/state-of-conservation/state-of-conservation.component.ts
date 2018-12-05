// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';
import * as plotchartdataset from '@data/plotcharts-dataset';

// graph color overrides
import * as eChartsConfig from '@global/charts';

@Component({
  selector: 'app-state-of-conservation',
  templateUrl: './state-of-conservation.component.html',
  styleUrls: ['./state-of-conservation.component.scss']
})

export class StateOfConservationComponent implements OnInit {
  public config: any;
  public selectedStateOfConservationToday: object;
  public selectedStateOfConservationPSM: object;
  public selectedSOCAllAssetsValues: Array<any>;
  public selectedSOCAllAssets: object;
  public imageTransitionValue = '2018';
  public imageTransitionObject = {
    '2013': 'assets/images/differencePerYear/asset1.jpg',
    '2015': 'assets/images/differencePerYear/asset2.jpg',
    '2018': 'assets/images/differencePerYear/asset1.jpg'
  }; // #HC

  public opts: any = {};
  public chartInstance: any = {};

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      this.config = dataset.dossiersMainData.dossier1.stateOfConservation;

      this.selectedStateOfConservationToday = this.config.stateOfConservationToday.populations.population1;
      this.selectedStateOfConservationPSM = this.config.stateOfConservationPricePerSqm.populations.population1;
      this.selectedSOCAllAssetsValues = this.initLastStateOfConservationAllAssets();
      this.selectedSOCAllAssets = this.config.panelFromMapStateOfConservationBreakdownAllAssets.years[this.selectedSOCAllAssetsValues[0]];
    });
  }

  getSCTodayPopulationNames(): Array<any> {
    return Object.keys(this.config.stateOfConservationToday.populations).map((population, i) => {
      return { id: i, key: population, value: this.config.stateOfConservationToday.populations[population].populationName.value };
    });
  }

  changeSCTodayValue(callbackEvent): void {
    this.selectedStateOfConservationToday = this.config.stateOfConservationToday.populations[callbackEvent];
    this.updateNumbOfAssetsBySc(callbackEvent);
  }

  changeSCPpsmValue(callbackEvent): void {
    this.selectedStateOfConservationPSM = this.config.stateOfConservationPricePerSqm.populations[callbackEvent];
    this.updatePriceEvolutionBySc(callbackEvent);
  }

  changeSOCAllAssetsValue(callbackEvent): void {
    this.selectedSOCAllAssets = this.config.panelFromMapStateOfConservationBreakdownAllAssets.years[callbackEvent.value];
  }

  changeImageTransition(callbackEvent): void {
    this.imageTransitionValue = callbackEvent.value;
  }

  initLastStateOfConservationAllAssets(): Array<any> {
    // Just incase... This is to get the last object of the years object. [0]
    // &&
    // the array of years to populte the slider [1]
    return [
      Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years)[
        Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years).length - 1],
      Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years)
    ];
  }

  getnumbOfAssetsBySc(population = 'population1'): Array<any> {
    const popSelected =  chartdataset.dossier1ChartsData.stateOfConservation.numbOfAssetsBySc.filter((line) => {
      if (line.population === population) {
        return line;
      }
    });

    this.opts.numbOfAssetsBySc = {
      legend: {
        data: popSelected.map(line => line.stateOfConservation)
      },
      xAxis: {
        type: 'category',
        axisLine: eChartsConfig.eChartsConfig.axisLine,
        data: popSelected.map(line => line.stateOfConservation)
      },
      yAxis: {
        type: 'value',
        axisLine: eChartsConfig.eChartsConfig.axisLine,
      }
    };

    const series = popSelected.map((line: any) => ({name: line.stateOfConservation, data: line.values, type: 'line'}));

    console.log(series);
    return series;
  }

  updateNumbOfAssetsBySc(population) {
    this.chartInstance.numbOfAssetsBySc.setOption({
      series: this.getnumbOfAssetsBySc(population)
    });
  }

  getpriceEvolutionBySc(population = 'population1'): Array<any> {
    const popSelected = chartdataset.dossier1ChartsData.stateOfConservation.priceEvolutionBySc.filter((line) => {
      if (line.population === population) {
        return line;
      }
    });

    this.opts.priceEvolutionBySc = {
      legend: {
        data: popSelected.map(line => line.stateOfConservation)
      },
      xAxis: {
        type: 'category',
        data: popSelected.map(line => line.stateOfConservation)
      },
      yAxis: {
        type: 'value'
      },
    };

    const series = popSelected.map((line: any) => ({ name: line.stateOfConservation, data: line.values, type: 'line' }));

    console.log(series);
    return series;
  }

  updatePriceEvolutionBySc(population) {
    this.chartInstance.priceEvolutionBySc.setOption({
      series: this.getpriceEvolutionBySc(population)
    });
  }

  getscpPriceEvo() {

    const serie = plotchartdataset.dossier1PlotChartsData.stateOfConservation.scpPriceEvo.filter((line) => {
      if ( line.population === 'population1' ) {
        return {
          type: 'scatter',
          symbolSize: 1,
          data: line
        };
      }
    });


    return serie;
  }

  onChartInit(chart, e) {
    this.chartInstance[chart] = e;
  }
}

