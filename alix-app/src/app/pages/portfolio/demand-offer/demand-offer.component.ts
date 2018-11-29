import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';

@Component({
    selector: 'app-demand-offer',
    templateUrl: './demand-offer.component.html',
    styleUrls: ['./demand-offer.component.scss']
})
export class DemandAndOfferComponent implements OnInit {
    public config: object;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            // console.log(params['id']);
            this.config = dataset.dossiersMainData.dossier1;
            // this.config = dataset.dossiersMainData['dossier' + params['id']];
            // console.log(this.config);
        });
    }
}
