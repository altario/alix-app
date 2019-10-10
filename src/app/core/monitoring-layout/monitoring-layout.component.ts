// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// anim
import { fadeAnimation } from '@app/animations';

// data
// import * as dataset from '@data/dossier1/dataset';

// services
import { DossiersCommunicationService } from '@services/dossiers-communication.service';

@Component({
    selector: 'app-monitoring-layout',
    templateUrl: './monitoring-layout.component.html',
    styleUrls: ['./monitoring-layout.component.scss'],
    animations: [fadeAnimation]
})
export class MonitoringLayoutComponent implements OnInit {
  // public config: any;

  constructor(private route: ActivatedRoute, private dossierCommService: DossiersCommunicationService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params.id);

      this.dossierCommService.emitChange(params.id);

      // this.config = dataset.dossier1MainData;
    });
  }
}
