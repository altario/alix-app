import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';


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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.config = dataset.dossiersMainData.dossier1;
      console.log(this.config)
      this.population = this.config.demandAndOffer.forSale.populations[Object.keys(this.config.demandAndOffer.forSale.populations)[0]];


      this.opts = {
        sqm: {
          title: {
            text: '# SQM / Asset Demand'
          },
        },
        rooms: {
          title: {
            text: '# Rooms / Asset Demand'
          },
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
    });

    this.marketValue();
    this.priceTodayVsOvertime();
    this.peerListedAssets5YForSale();

  }

  getPopulationNames(): Array<any> {
    return Object.keys(this.config.demandAndOffer.forSale.populations).map((population, i) => {
      return { id: i, key: population, value: this.config.demandAndOffer.forSale.populations[population].populationName.value };
    });
  }

  changePopulationValue(callbackEvent) {
    this.population = this.config.demandAndOffer.forSale.populations[callbackEvent];
  }

  /**
   * 
   */

  marketValue() {

    this.opts.marketValue= {
      legend: {
        data: [
          chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.marketValueSqm.label,
          chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.replacementCostSqm.label
        ]
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
          data: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.year.values
      }
    };

    this.series.marketValue = [{
        name: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.marketValueSqm.label,
        data: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.marketValueSqm.values,
        type: 'line'
      }, {
        name: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.replacementCostSqm.label,
        data: chartdataset.dossier1ChartsData.demandOffer.neighborhoodMktValueVsReplacementCost.replacementCostSqm.values,
        type: 'line'
      }];
  }

  priceTodayVsOvertime() {

    this.opts.priceTodayVsOvertime = {
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
        data: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime.year.values
      }
    };

    this.series.priceTodayVsOvertime = [{
      name: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime['assetPrice'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime['assetPrice'].values,
      type: 'line',
      areaStyle: {}
    }];
  }

  peerListedAssets5YForSale() {
    this.opts.peerListedAssets5YForSale = {
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
        data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale.year.values
      }
    };

    this.series.peerListedAssets5YForSale = [{
      name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['radius1Km'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['radius1Km'].values,
      type: 'line',
      areaStyle: {}
    }, {
      name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['portaNuova'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['portaNuova'].values,
      type: 'line',
      areaStyle: {}
    }, {
      name: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['milano'].label,
      data: chartdataset.dossier1ChartsData.demandOffer.peerListedAssets5YForSale['milano'].values,
      type: 'line',
      areaStyle: {}
    }];
  }

  longTermRentEvolutionEurSqm() {

  }

  peerListedAssets5YLr() {

  }

  peerAssetsDemandRateListingToUnlistingLr() {

  }

  peerListedAssets5YSr() {

  }

  peerAssetsOccupancyRateSr() {

  }
  /**
   * 
   */
  getPriceTodayVsOvertime(): Array<any> {
    const options = Object.keys(chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime).map((population, i) => {
        return { id: i-1, key: population, value: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[population].label };
    });

    options.shift();
    return options;
  }

  changePriceTodayVsOvertime(callbackEvent, chartInstance ): void {
    this.series.priceTodayVsOvertime = [{
      name: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[callbackEvent].label,
      data: chartdataset.dossier1ChartsData.demandOffer.priceTodayVsOvertime[callbackEvent].values,
      type: 'line',
      areaStyle: {}
    }];

    this.chartInstance.priceTodayVsOvertime.setOption({
      series: this.series.priceTodayVsOvertime
    });

    console.log(this.series.priceTodayVsOvertime);
  }

  onChartInit(chart, e) {
    this.chartInstance[chart] = e;
    console.log(this.chartInstance);
  }

}
