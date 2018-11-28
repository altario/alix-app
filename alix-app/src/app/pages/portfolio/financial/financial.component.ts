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
    private dossierId: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      // console.log(dataset.dossiersMainData);
      // console.log(this.route.snapshot.params['id']);

      this.route.params.subscribe( params => {
        this.dossierId = params['id'];
        console.log(dataset.dossiersMainData['dossier' + this.dossierId]);
      });
    }
}
