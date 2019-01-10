// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset1 from '@data/dossier1/dataset';
import * as dataset2 from '@data/dossier2/dataset';

// services
import { DossiersCommunicationService } from '@services/dossiers-communication.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
  public config: object;
  // public dossier: object;

  public isRealEstate = false;
  public isRetail = false;

  constructor(private route: ActivatedRoute, private dossierCommService: DossiersCommunicationService) {
    // this.dossierCommService.changeEmitted$.subscribe(data => {
    //   // console.log(typeof data);
    //   console.log('01', data);

    //   // if (data === '4') {
    //   //   this.dossier = dataset2.dossier2MainData;
    //   // } else {
    //   //   this.dossier = dataset1.dossier1MainData;
    //   // }
    //   this.dossier = dataset1.dossier1MainData;
    // });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log('02');
      // this.config = this.dossier;

      if ((this.route as any)._routerState.snapshot.url.indexOf('/re/') !== -1) {
        // console.log('REAL_ESTATE');
        this.isRealEstate = true;
        this.config = dataset1.dossier1MainData;
      }
      if ((this.route as any)._routerState.snapshot.url.indexOf('/retail/') !== -1) {
        // console.log('RETAIL');
        this.isRetail = true;
        this.config = dataset2.dossier2MainData;
      } else {
        // console.log('REAL_ESTATE');
        this.isRealEstate = true;
        this.config = dataset1.dossier1MainData;
      }

      // console.log(params['id']);
      // this.config = dataset1.dossier1MainData;

      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      // console.log(this.config);
    });
  }
}
