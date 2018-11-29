import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import { anchorDef } from '@angular/core/src/view';

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
            this.config = dataset.dossiersMainData.dossier1;
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
                }
            };

            this.series = {
                marketValue: [{
                    name: 'Linha 1',
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }, {
                    name: 'Linha 2',
                    data: [33, 5464, 901, 456, 445, 335, 2342],
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
