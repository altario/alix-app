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
    selector: 'app-positions-layout',
    templateUrl: './positions-layout.component.html',
    styleUrls: ['./positions-layout.component.scss'],
    animations: [fadeAnimation]
})
export class PositionsLayoutComponent implements OnInit {
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
