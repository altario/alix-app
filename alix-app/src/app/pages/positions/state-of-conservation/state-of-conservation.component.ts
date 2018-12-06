// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';
import * as plotchartdataset from '@data/plotcharts-dataset';

// graph color overrides
import { eChartsConfig } from '@global/charts';

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

  public numbOfAssetsBySc;
  public priceEvolutionBySc;

  public opts: any = {};
  public chartInstance: any = {};

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      this.config = dataset.dossiersMainData.dossier1.stateOfConservation;

      this.selectedStateOfConservationToday = this.config.stateOfConservationToday.populations.population1;
      this.selectedStateOfConservationPSM = this.config.stateOfConservationPricePerSqm.populations.population1;
      this.selectedSOCAllAssetsValues = this.initLastStateOfConservationAllAssets();
      this.selectedSOCAllAssets = this.config.panelFromMapStateOfConservationBreakdownAllAssets.years[this.selectedSOCAllAssetsValues[0]];
      this.numbOfAssetsBySc = this.getnumbOfAssetsBySc();
      this.priceEvolutionBySc = this.getpriceEvolutionBySc();
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
    const lineColors = ['#00B5E9', '#7AC143', '#C7DA2C', '#F2E603', '#FCB86B', '#E9545C'];
    const popSelected = chartdataset.dossier1ChartsData.stateOfConservation.numbOfAssetsBySc.filter(line => line.population === population);

    this.opts.numbOfAssetsBySc = {
      title: {
        text: '# BY STATE OF CONSERVATION', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: popSelected.map(line => ({ name: line.stateOfConservation, icon: 'rect' })),
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
      xAxis: {
        type: 'category',
        data: [2013, 2014, 2015, 2016, 2017, 2018],
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

    const series = popSelected.map((line: any, i) => ({
      name: line.stateOfConservation,
      data: line.values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[i] },
      itemStyle: { color: lineColors[i] }
    }));

    console.log(series);
    return series;
  }

  updateNumbOfAssetsBySc(population) {
    this.chartInstance.numbOfAssetsBySc.setOption({
      series: this.getnumbOfAssetsBySc(population)
    });
  }

  getpriceEvolutionBySc(population = 'population1'): Array<any> {
    const lineColors = ['#00B5E9', '#7AC143', '#C7DA2C', '#F2E603', '#FCB86B', '#E9545C'];
    const popSelected = chartdataset.dossier1ChartsData.stateOfConservation.priceEvolutionBySc.filter(line => line.population === population);

    this.opts.priceEvolutionBySc = {
      title: {
        text: 'PRICE EVOLUTION BY STATE OF CONSERVATION', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: popSelected.map(line => ({ name: line.stateOfConservation, icon: 'rect' })),
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: '55px',
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      grid: eChartsConfig.grid,
      xAxis: {
        type: 'category',
        data: [2013, 2014, 2015, 2016, 2017, 2018],
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

    const series = popSelected.map((line: any, i) => ({
      name: line.stateOfConservation,
      data: line.values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[i] },
      itemStyle: { color: lineColors[i] }
    }));

    console.log(series);
    return series;
  }

  updatePriceEvolutionBySc(population) {
    this.chartInstance.priceEvolutionBySc.setOption({
      series: this.getpriceEvolutionBySc(population)
    });
  }

  getscpPriceEvo(population = 'population1'): Array<any> {

    this.opts.scpPriceEvo = {
      color: ['#333333', '#D291BC'],
      grid: {
        left: 100
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
      if (line.population === population) {
        return line;
      }
    });

    const x = series.map((line) => line.values).shift();
    console.log(x);

    return x;
  }

  onChartInit(chart, e) {
    this.chartInstance[chart] = e;
  }
}

