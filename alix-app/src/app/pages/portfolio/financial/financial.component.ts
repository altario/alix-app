import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '../../../data/dataset';

@Component({
    selector: 'app-financial',
    templateUrl: './financial.component.html',
    styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
    public config: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      this.route.params.subscribe( params => {
        this.config = dataset.dossiersMainData['dossier' + params['id']];
        console.log(this.config)
      });
    }
}
