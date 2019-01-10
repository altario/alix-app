import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dossier1/dataset';
import * as chartdataset from '@data/dossier1/charts-dataset';
// import { dossier1PlotChartsData } from '@data/dossier1/plotcharts-dataset';
import * as extrachartdataset from '@data/dossier1/extra-charts-dataset';
import * as  chartsOverride from '@data/dossier1/charts-override-dataset';

import { eChartsConfig } from '@global/charts';
import { numericalValues } from '@helpers/numerical-values.lib';
import { dossier1dataComparison } from '@app/data/dossier1/charts-override-dataset';


@Component({
  selector: 'app-demand-offer',
  templateUrl: './demand-offer.component.html',
  styleUrls: ['./demand-offer.component.scss']
})
export class DemandAndOfferComponent implements OnInit {

  public config: any;
  public series: any;
  public opts: any;
  public chartInstance: any = {};
  public population: any;
  public populationForSale: any;
  public populationLongRent: any;
  public populationShortRent: any;
  public populationShortRentDemand: any;
  public assetDemand: any = {
    sqm: {
      series: {},
      opts: {}
    },
    rooms: {
      series: {},
      opts: {}
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.config = dataset.dossier1MainData;
      // console.log(this.config);
      this.populationForSale = this.config.demandAndOffer.forSale.populations.population1;
      this.populationLongRent = this.config.demandAndOffer.longRent.populations.population1;
      this.populationShortRent = this.config.demandAndOffer.shortRent.populations.population1;
      this.populationShortRentDemand = this.config.demandAndOffer.shortRent.populations.population1;
      this.assetDemand = {
        sqm: {
            series: this.getAssetDemands('sqmDemandVsDays'),
          opts: {
            title: {
              show: true,
              text: '# SQM / Asset Demand',
              top: '17px',
              left: '40px',
              textStyle: eChartsConfig.title
            },
            legend: {
              data: [
                { name: 'Radius 1km', icon: 'rect' },
                { name: 'Puorta Nuova', icon: 'rect' },
                { name: 'Milano', icon: 'rect' },
                { name: 'BAAAAAH', icon: 'rect' }
              ],
              itemWidth: eChartsConfig.legend.itemWidth,
              itemHeight: eChartsConfig.legend.itemHeight,
              top: '55px',
              right: eChartsConfig.legend.right,
              textStyle: {
                fontSize: eChartsConfig.legend.fontSize,
                color: eChartsConfig.legend.color
              }
            },
            grid: {
              left: '20%',
              top: '20%'
            },
            xAxis: {
              type: 'value',
              name: 'SQM',
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
              }
            },
            yAxis: {
              type: 'value',
              name: 'Listed Time',
              nameTextStyle: {
                color: '#FFFFFF',
                padding: [0, 100, 0, 0]
              },
              nameLocation: 'end',
              offset: 20,
              splitLine: eChartsConfig.yAxis.splitLine,
              axisLabel: {
                color: eChartsConfig.yAxis.axisLabel.color,
                formatter: '{value} Days'
              },
              axisLine: {
                show: false
              }
            }
          },
        },

        rooms: {
            series: this.getAssetDemands('roomDemandVsDays'),
          opts: {
            title: {
              text: '# Rooms / Asset Demand',
              top: '17px',
              left: '40px',
              textStyle: eChartsConfig.title
            },
            legend: {
              data: [
                { name: 'Radius 1km', icon: 'rect' },
                { name: 'Puorta Nuova', icon: 'rect' },
                { name: 'Milano', icon: 'rect' },
                { name: 'BAAAAAH', icon: 'rect' }
              ],
              itemWidth: eChartsConfig.legend.itemWidth,
              itemHeight: eChartsConfig.legend.itemHeight,
              top: '55px',
              right: 10,
              textStyle: {
                fontSize: eChartsConfig.legend.fontSize,
                color: eChartsConfig.legend.color
              }
            },
            grid: {
              left: '20%',
              top: '20%'
            },
            xAxis: {
              type: 'value',
              name: 'Rooms p Asset',
              nameTextStyle: {
                color: '#FFFFFF',
                padding: [10, 0, 0, 0],
              },
              nameLocation: 'center',
              splitLine: {
                show: false
              },
              axisLabel: eChartsConfig.xAxis.axisLabel,
              axisLine: {
                show: false
              }
            },
            yAxis: {
              type: 'value',
              name: 'Listed Time',
              nameTextStyle: {
                color: '#FFFFFF',
                padding: [0, 100, 0, 0]
              },
              nameLocation: 'end',
              offset: 20,
              splitLine: eChartsConfig.yAxis.splitLine,
              axisLabel: {
                color: eChartsConfig.yAxis.axisLabel.color,
                formatter: '{value} Days'
              },
              axisLine: {
                show: false
              }
            }
          }
        }
      };
    });

    this.opts = {
      sqm: {
      },
      rooms: {
        xAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: function (x, y) {
                return 'Label: ' + x;
              }
            }
          }
        ],
      }
    };

    this.series = {
      sqm: [{
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
        ],
        type: 'scatter'
      }],
      rooms: [{
        symbolSize: 20,
        data: [
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68],
          [10.0, 8.04],
          [8.0, 6.95],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96]
        ],
        type: 'scatter'
      }],
    };

    const lineColors = { radius1Km: '#913BAF', portaNuova: '#F26D4F', milano: '#BF5E5E' };
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };

    this.opts.shortTermRentEvolutionEurSqm = {
      legend: {
        data: [
          { name: extrachartdataset.dossier1Extra.shortTermRentEvolutionEurSqm.radius1Km.label, icon: 'rect' },
          { name: extrachartdataset.dossier1Extra.shortTermRentEvolutionEurSqm.portaNuova.label, icon: 'rect' },
          { name: extrachartdataset.dossier1Extra.shortTermRentEvolutionEurSqm.milano.label, icon: 'rect' },
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
        formatter: (params) => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '') + '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        data: extrachartdataset.dossier1Extra.shortTermRentEvolutionEurSqm.year.values,
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

    this.series.shortTermRentEvolutionEurSqm = Object.keys(extrachartdataset.dossier1Extra.shortTermRentEvolutionEurSqm)
      .reduce((prev, next, i) => {
        if (next !== 'year') {
          prev.push({
            name: extrachartdataset.dossier1Extra.shortTermRentEvolutionEurSqm[next].label,
            data: extrachartdataset.dossier1Extra.shortTermRentEvolutionEurSqm[next].values,
            type: 'line',
            symbol: eChartsConfig.series.symbol,
            symbolSize: eChartsConfig.series.symbolSize,
            lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[next] },
            itemStyle: { color: lineColors[next] }
          });
        }
        return prev;
      }, []);


    this.marketValue();
    this.priceTodayVsOvertime();
    this.peerListedAssets5YForSale();
    this.series.longTermRentEvolutionEurSqm = this.longTermRentEvolutionEurSqm();
    this.peerListedAssets5YLr();
    this.peerListedAssets5YSr();
    this.peerAssetsDemandRateListingToUnlistingForSale();
    this.peerAssetsDemandRateListingToUnlistingLr();
    this.peerAssetsOccupancyRateSr();
    this.assetViewsVsTopOccupancySr();
  }

  getPopulationNames(): Array<any> {
    return Object.keys(this.config.demandAndOffer.forSale.populations).map((population, i) => {
      return { id: i, key: population, value: this.config.demandAndOffer.forSale.populations[population].populationName.value };
    });
  }

  changePopulationForSaleValue(callbackEvent): void {
    this.populationForSale = this.config.demandAndOffer.forSale.populations[callbackEvent];
  }

  changePopulationLongRentValue(callbackEvent): void {
    this.populationLongRent = this.config.demandAndOffer.longRent.populations[callbackEvent];
  }

  changePopulationShortRentValue(callbackEvent): void {
    this.populationShortRent = this.config.demandAndOffer.shortRent.populations[callbackEvent];
  }

  changePopulationShortRentDemandValue(callbackEvent): void {
    this.populationShortRentDemand = this.config.demandAndOffer.shortRent.populations[callbackEvent];
  }



  /**
   *
   */

  marketValue() {
    const lineColors = ['#FFFFFF', '#00B5E9', '#7AC143'];
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };

    this.opts.marketValue = {
      title: {
        text: 'Market Value -VS- Replacement Cost', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: [
          { name: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.marketValueSqm.label, icon: 'rect' },
          { name: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.replacementCostSqm.label, icon: 'rect' }
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
        formatter: (params) => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '') + '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        data: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.year.values,
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

    this.series.marketValue = Object.keys(chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost)
      .reduce((prev, next, i) => {
        if (next !== 'year') {
          prev.push({
            name: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost[next].label,
            data: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost[next].values,
            type: 'line',
            symbol: eChartsConfig.series.symbol,
            symbolSize: eChartsConfig.series.symbolSize,
            lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[i] },
            itemStyle: { color: lineColors[i] }
          });
        }
        return prev;
      }, []);

    this.series.marketValue.push({
      name: dossier1dataComparison.neighborhoodMktValueVsReplacementCost.name,
      data: dossier1dataComparison.neighborhoodMktValueVsReplacementCost.values,
      type: 'line',
      showSymbol: false,
      symbol: 'none',
      symbolSize: 0,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: '#FF0000', type: 'dotted' },
      itemStyle: { color: '#FF0000' }
    });
  }

  assetViewsVsTopOccupancySr(population = 'population1') {

    const lineColors = ['#913BAF', '#F26D4F', '#BF5E5E' ];
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };
    const series = extrachartdataset.dossier1Extra.assetViewsVsTopOccupancySr.filter((row) => row.population === population);

    this.opts.assetViewsVsTopOccupancySr = {

      legend: {
        data: series.map((row) => {
          return { name: row.stateOfConservation, icon: 'rect' };
        }),
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
        formatter: (params) => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '') + '<br />';
          });

          return rez;
        }
      },
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
        axisLabel: axisyLabel,
        axisLine: {
          show: false
        }
      }
    };

    this.series.assetViewsVsTopOccupancySr = series.map((row, i) => {
      return {
        name: row.stateOfConservation,
        data: row.values,
        type: 'line',
        symbol: eChartsConfig.series.symbol,
        symbolSize: eChartsConfig.series.symbolSize,
        lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[i] },
        itemStyle: { color: lineColors[i] }
      };
    });

  }

  priceTodayVsOvertime(population = 'radius1Km') {
    const lineColors = { radius1Km: '#913BAF', portaNuova: '#F26D4F', milano: '#BF5E5E' };
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '');
    };

    this.opts.priceTodayVsOvertime = {
      title: {
        text: 'PRICE Sqm. TODAY VS RADIUS AVG OVER TIME', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: [
          { name: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].label, icon: 'rect' },
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
        formatter: (params) => {
          // tslint:disable-next-line:max-line-length
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            // tslint:disable-next-line:max-line-length
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname + '€' : '') + '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        data: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime.year.values,
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

    this.series.priceTodayVsOvertime = [{
      name: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].label,
      data: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[population] },
      itemStyle: { color: lineColors[population] }
    }];

    this.series.priceTodayVsOvertime.push({
      name: dossier1dataComparison.priceSqmTodayVsOvertimeForSale.name,
      data: dossier1dataComparison.priceSqmTodayVsOvertimeForSale.values,
      type: 'line',
      showSymbol: false,
      symbol: 'none',
      symbolSize: 0,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: '#FF0000', type: 'dotted' },
      itemStyle: { color: '#FF0000' }
    });

  }

  peerListedAssets5YForSale() {
    this.opts.peerListedAssets5YForSale = {
      title: {
        text: 'Volume of RE Listed Assets > Last 5 Years', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: [
          { name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['radius1Km'].label, icon: 'rect' },
          { name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['portaNuova'].label, icon: 'rect' },
          { name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['milano'].label, icon: 'rect' },
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
        }
      },
      xAxis: {
        type: 'category',
        data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale.year.values,
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        name: 'Num of Assets',
        nameTextStyle: {
          color: '#FFFFFF',
          padding: [0, 100, 0, 0]
        },
        nameLocation: 'end',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: eChartsConfig.yAxis.axisLabel,
        axisLine: {
          show: false
        }
      }
    };

    this.series.peerListedAssets5YForSale = [{
      name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['radius1Km'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['radius1Km'].values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: '#913BAF' },
      itemStyle: { color: '#913BAF' }
    }, {
      name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['portaNuova'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['portaNuova'].values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: '#F26D4F' },
      itemStyle: { color: '#F26D4F' }
    }, {
      name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['milano'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['milano'].values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: '#BF5E5E' },
      itemStyle: { color: '#BF5E5E' }
    }];
  }

  peerAssetsDemandRateListingToUnlistingForSale() {
    this.opts.peerAssetsDemandRateListingToUnlistingForSale = {
      title: {
        text: 'AVG Demand Rate Growth (Sale)', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },

      calculable: true,
      legend: {
        data: Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingForSale)
          .map(population => population !== 'year' ?
            chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingForSale[population].label :
            null
          ),
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
        data: chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingForSale.year.values
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

    this.series.peerAssetsDemandRateListingToUnlistingForSale =
      Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingForSale).reduce((prev, next, i) => {
        if (next !== 'year') {
          prev.push({
            name: chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingForSale[next].label,
            data: chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingForSale[next].values,
            type: 'bar',
            barGap: 0,
            color: lineColors[next]
          });
        }

        return prev;
      }, []);
  }

  longTermRentEvolutionEurSqm(population = 'population1') {
    const populationNames = {
      population1: 'radius1Km',
      population2: 'portaNuova',
      population3: 'milano'
    };

    this.opts.longTermRentEvolutionEurSqm = {
      title: {
        text: 'Long Term Rent € SQM Evolution', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      grid: eChartsConfig.grid,
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
        data: chartdataset.dossier1ChartsData.demandOffer.longTermRentEvolutionEurSqm[0].year.values,
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
    const series = chartdataset.dossier1ChartsData.demandOffer.longTermRentEvolutionEurSqm
      .reduce((prev, next, i) => {

        prev.push({
          name: next[populationNames[population]].label,
          data: next[populationNames[population]].values,
          type: 'line',
          symbol: eChartsConfig.series.symbol,
          symbolSize: eChartsConfig.series.symbolSize,
          lineStyle: { ...eChartsConfig.series.lineStyle, color: '#79C14C' },
          itemStyle: { color: '#79C14C' }
        });
          // console.log(prev);
        return prev;
      }, []);

      // console.log(series);
      return series;
  }

  peerListedAssets5YLr() {
    const lineColors = { radius1Km: '#913BAF', portaNuova: '#F26D4F', milano: '#BF5E5E' };
    this.opts.peerListedAssets5YLr = {
      title: {
        text: 'Volume of RE Listed Assets > Last 5 Years', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr)
          .reduce((prev, next, index) => {
            if (next !== 'year') {
              prev.push({ name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr[next].label, icon: 'rect' });
            }
            return prev;
          }, []),
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
        }
      },
      xAxis: {
        type: 'category',
        data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr.year.values,
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        name: 'Num of Assets',
        nameTextStyle: {
          color: '#FFFFFF',
          padding: [0, 100, 0, 0]
        },
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: eChartsConfig.yAxis.axisLabel,
        axisLine: {
          show: false
        }
      }
    };

    this.series.peerListedAssets5YLr = Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr)
      .reduce((prev, next, index) => {
        if (next !== 'year') {
          prev.push({
            name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr[next].label,
            data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr[next].values,
            type: 'line',
            symbol: eChartsConfig.series.symbol,
            symbolSize: eChartsConfig.series.symbolSize,
            lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[next] },
            itemStyle: { color: lineColors[next] }
          });
        }
        return prev;
      }, []);
  }

  peerAssetsDemandRateListingToUnlistingLr() {
    this.opts.peerAssetsDemandRateListingToUnlistingLr = {
      title: {
        text: 'AVG Demand Rate Growth (LTR)', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },

      calculable: true,
      legend: {
        data: Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingLr)
          .map(population => population !== 'year' ?
            chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingLr[population].label :
            null
          ),
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
        data: chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingLr.year.values
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

    this.series.peerAssetsDemandRateListingToUnlistingLr =
      Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingLr).reduce((prev, next, i) => {
        if (next !== 'year') {
          prev.push({
            name: chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingLr[next].label,
            data: chartdataset.dossier1ChartsData.demandOffer.peerAssetsDemandRateListingToUnlistingLr[next].values,
            type: 'bar',
            barGap: 0,
            color: lineColors[next]
          });
        }

        return prev;
      }, []);
  }

  peerListedAssets5YSr() {
    const lineColors = { radius1Km: '#913BAF', portaNuova: '#F26D4F', milano: '#BF5E5E' };
    this.opts.peerListedAssets5YSr = {
      title: {
        text: 'Volume of RE Listed Assets > Last 5 Years', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr)
          .reduce((prev, next, index) => {
            if (next !== 'year') {
              prev.push({ name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr[next].label, icon: 'rect' });
            }
            return prev;
          }, []),
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
        }
      },
      xAxis: {
        type: 'category',
        data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr.year.values,
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

    this.series.peerListedAssets5YSr = Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr)
      .reduce((prev, next, index) => {
        if (next !== 'year') {
          prev.push({
            name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr[next].label,
            data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr[next].values,
            type: 'line',
            symbol: eChartsConfig.series.symbol,
            symbolSize: eChartsConfig.series.symbolSize,
            lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[next] },
            itemStyle: { color: lineColors[next] }
          });
        }
        return prev;
      }, []);
  }

  peerAssetsOccupancyRateSr() {
    this.opts.peerAssetsOccupancyRateSr = {
      title: {
        text: 'AVG Demand Rate Growth (STR)', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },

      calculable: true,
      legend: {
        show: true,
        data: Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerAssetsOccupancyRateSr)
          .map(population => population !== 'year' ?
            chartdataset.dossier1ChartsData.demandOffer.peerAssetsOccupancyRateSr[population].label :
            null
          ),
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
        data: chartdataset.dossier1ChartsData.demandOffer.peerAssetsOccupancyRateSr.year.values
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

    this.series.peerAssetsOccupancyRateSr =
      Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerAssetsOccupancyRateSr).reduce((prev, next, i) => {
        if (next !== 'year') {
          prev.push({
            name: chartdataset.dossier1ChartsData.demandOffer.peerAssetsOccupancyRateSr[next].label,
            data: chartdataset.dossier1ChartsData.demandOffer.peerAssetsOccupancyRateSr[next].values,
            type: 'bar',
            barGap: 0,
            color: lineColors[next]
          });
        }

        return prev;
      }, []);
  }
  /**
   *
   */
  getPriceTodayVsOvertime(): Array<any> {
    const options = Object.keys(chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime).map((population, i) => {
      return { id: i - 2, key: population, value: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].label };
    });

    options.splice(0, 2);
    return options;
  }

  changePriceTodayVsOvertime(callbackEvent, chartInstance): void {
    this.priceTodayVsOvertime(callbackEvent);
    this.chartInstance.priceTodayVsOvertime.setOption({
      series: this.series.priceTodayVsOvertime
    });
  }

  changelongTermRentEvolutionEurSqmValue(callbackEvent): void {
    this.chartInstance.longTermRentEvolutionEurSqm.setOption({
      series: this.longTermRentEvolutionEurSqm(callbackEvent)
    });
  }

  onChartInit(chart, e) {
    this.chartInstance[chart] = e;
  }


  getAssetDemands(type = null): Array<any> {
    /*const colors = ['#913BAF', '#F26D4F', '#BF5E5E'];

    return dossier1PlotChartsData.demandOffer[type]
      .reduce((prev, next, i) => {
        next.values.map((value, idx) => {
          prev.push(value);
        });

        return prev;
      }, []);
      */

    return chartsOverride.dossier1ChartsOverride[type];
    }
}
