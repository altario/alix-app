import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';
import { dossier1PlotChartsData } from '@data/plotcharts-dataset';

import { eChartsConfig } from '@global/charts';

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
      this.config = dataset.dossiersMainData.dossier1;
      console.log(this.config);
      this.populationForSale = this.config.demandAndOffer.forSale.populations.population1;
      this.populationLongRent = this.config.demandAndOffer.longRent.populations.population1;
      this.populationShortRent = this.config.demandAndOffer.shortRent.populations.population1;
      this.populationShortRentDemand = this.config.demandAndOffer.shortRent.populations.population1;
      this.assetDemand = {
        sqm: {
          series: this.getAssetDemands('scpSqmDemandEvolution'),
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
          series: this.getAssetDemands('scpRoomsDemandEvolution'),
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
              formatter: function(x, y) {
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


    this.marketValue();
    this.priceTodayVsOvertime();
    this.peerListedAssets5YForSale();
    this.series.longTermRentEvolutionEurSqm = this.longTermRentEvolutionEurSqm();
    this.peerListedAssets5YLr();
    this.peerListedAssets5YSr();
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
    this.opts.marketValue = {
      title: {
        text: 'Market Value -VS- Replacement Cost', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: [
          {name: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.marketValueSqm.label, icon: 'rect'},
          {name: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.replacementCostSqm.label, icon: 'rect'}
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
        data: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.year.values,
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

    this.series.marketValue = Object.keys(chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost)
      .reduce((prev, next, i) => {
          if (next !== 'year') {
            prev.push({
              name: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost[next].label,
              data: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost[next].values,
              type: 'line',
              symbol: eChartsConfig.series.symbol,
              symbolSize: eChartsConfig.series.symbolSize,
              lineStyle: {...eChartsConfig.series.lineStyle, color: lineColors[i] },
              itemStyle: { color: lineColors[i] }
            });
          }
        return prev;
      }, []);
  }

  priceTodayVsOvertime(population = 'radius1Km') {
    const lineColors = {radius1Km: '#913BAF', portaNuova: '#F26D4F', milano: '#BF5E5E'};
    this.opts.priceTodayVsOvertime = {
      title: {
        text: 'PRICE Sqm. TODAY VS RADIUS AVG OVER TIME', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: [
          {name: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].label, icon: 'rect'},
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
        data: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime.year.values,
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

    this.series.priceTodayVsOvertime = [{
      name: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].label,
      data: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: {...eChartsConfig.series.lineStyle, color: lineColors[population] },
      itemStyle: { color: lineColors[population] }
    }];

  }

  peerListedAssets5YForSale() {
    this.opts.peerListedAssets5YForSale = {
      title: {
        text: 'PRICE Sqm. TODAY VS RADIUS AVG OVER TIME', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: [
          {name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['radius1Km'].label, icon: 'rect'},
          {name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['portaNuova'].label, icon: 'rect'},
          {name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['milano'].label, icon: 'rect'},
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
      lineStyle: {...eChartsConfig.series.lineStyle, color: '#913BAF' },
      itemStyle: { color: '#913BAF' }
    }, {
      name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['portaNuova'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['portaNuova'].values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: {...eChartsConfig.series.lineStyle, color: '#F26D4F' },
      itemStyle: { color: '#F26D4F' }
    }, {
      name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['milano'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['milano'].values,
      type: 'line',
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: {...eChartsConfig.series.lineStyle, color: '#BF5E5E' },
      itemStyle: { color: '#BF5E5E' }
    }];
  }

  peerAssetsDemandRateListingToUnlistingForSale() {}

  longTermRentEvolutionEurSqm(population = 'population1') {
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

    return chartdataset.dossier1ChartsData.demandOffer.longTermRentEvolutionEurSqm
      .reduce((prev, next, i) => {
        prev.push({
          name: next[populationNames[population]].label,
          data: next[populationNames[population]].values,
          type: 'line',
          symbol: eChartsConfig.series.symbol,
          symbolSize: eChartsConfig.series.symbolSize,
          lineStyle: {...eChartsConfig.series.lineStyle, color: '#79C14C' },
          itemStyle: { color: '#79C14C' }
        });

        return prev;
      }, []);
  }

  peerListedAssets5YLr() {
    this.opts.peerListedAssets5YLr = {
      legend: {
        data: Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr)
          .reduce((prev, next, index) => {
              if (next !== 'year') {
                prev.push(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr[next].label);
              }
            return prev;
          }, [])
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
        data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr.year.values
      }
    };

    this.series.peerListedAssets5YLr = Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr)
      .reduce((prev, next, index) => {
          if (next !== 'year') {
            prev.push({
              name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr[next].label,
              data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YLr[next].values,
              type: 'line',
              areaStyle: {}
            });
          }
        return prev;
      }, []);
  }

  peerAssetsDemandRateListingToUnlistingLr() {

  }

  peerListedAssets5YSr() {
    this.opts.peerListedAssets5YSr = {
      legend: {
        data: Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr)
          .reduce((prev, next, index) => {
              if (next !== 'year') {
                prev.push(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr[next].label);
              }
            return prev;
          }, [])
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
        data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr.year.values
      }
    };

    this.series.peerListedAssets5YSr = Object.keys(chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr)
      .reduce((prev, next, index) => {
          if (next !== 'year') {
            prev.push({
              name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr[next].label,
              data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YSr[next].values,
              type: 'line',
              areaStyle: {}
            });
          }
        return prev;
      }, []);
  }

  peerAssetsOccupancyRateSr() {

  }
  /**
   *
   */
  getPriceTodayVsOvertime(): Array<any> {
    const options = Object.keys(chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime).map((population, i) => {
        return { id: i-2, key: population, value: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].label };
    });

    options.splice(0, 2);
    return options;
  }

  changePriceTodayVsOvertime(callbackEvent, chartInstance ): void {
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
    const colors = ['#913BAF', '#F26D4F', '#BF5E5E'];

    return dossier1PlotChartsData.demandOffer[type]
      .reduce((prev, next, i) => {
        next.values.map((value, idx) => {
          prev.push(value);
        });

        return prev;
      }, []);
  }
}
