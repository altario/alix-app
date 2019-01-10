// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset1 from '@data/dossier1/dataset';
import * as dataset2 from '@data/dossier2/dataset';

// services
import { DossiersCommunicationService } from '@services/dossiers-communication.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export class PerformanceComponent implements OnInit {
  public config: object;
  public dossier: object;

  constructor(private route: ActivatedRoute, private dossierCommService: DossiersCommunicationService) {
    this.dossierCommService.changeEmitted$.subscribe(data => {
      // console.log(typeof data);
      // console.log('01', data);
      // if (data === '4') {
      //   this.dossier = dataset2.dossier2MainData;
      // } else {
      //   this.dossier = dataset1.dossier1MainData;
      // }
      this.dossier = dataset1.dossier1MainData;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      // this.config = dataset1.dossier1MainData;
      this.config = this.dossier;
      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      // console.log(this.config);
    });
  }
}
