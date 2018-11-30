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
    public config: object;
    public series: any;
    public opts: any;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            // console.log(params['id']);
            this.config = dataset.dossiersMainData.dossier1.demandAndOffer;
            console.log(this.config)

            this.opts = {
                marketValue: {
                  legend: {
                    data: [
                      chartdataset.dossier1ChartsData.demandOffer.mktValueVsReplacementCost.marketValueSqm.label,
                      chartdataset.dossier1ChartsData.demandOffer.mktValueVsReplacementCost.replacementCostSqm.label
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
                      data: chartdataset.dossier1ChartsData.demandOffer.mktValueVsReplacementCost.year.values
                  }
                },
                sqm: {
                    title: {
                        text: '# SQM / Asset Demand'
                    },
                },
                rooms: {
                    title: {
                        text: '# Rooms / Asset Demand'
                    },
                }
            };



            this.series = {
                marketValue: [{
                  name: chartdataset.dossier1ChartsData.demandOffer.mktValueVsReplacementCost.marketValueSqm.label,
                  data: chartdataset.dossier1ChartsData.demandOffer.mktValueVsReplacementCost.marketValueSqm.values,
                  type: 'line'
                }, {
                  name: chartdataset.dossier1ChartsData.demandOffer.mktValueVsReplacementCost.replacementCostSqm.label,
                  data: chartdataset.dossier1ChartsData.demandOffer.mktValueVsReplacementCost.replacementCostSqm.values,
                  type: 'line'
                }],


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
                }]

            };
        });
    }
}
