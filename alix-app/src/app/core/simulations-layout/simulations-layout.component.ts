// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// anim
import { fadeAnimation } from '@app/animations';

// data
import * as dataset from '@data/lists/underwriter-data';

// services
import { DossiersCommunicationService } from '@services/dossiers-communication.service';


@Component({
    selector: 'app-simulations-layout',
    templateUrl: './simulations-layout.component.html',
    styleUrls: ['./simulations-layout.component.scss'],
    animations: [fadeAnimation]
})
export class SimulationsLayoutComponent implements OnInit {
  public config: any;

  constructor(private route: ActivatedRoute, private dossierCommService: DossiersCommunicationService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params.id);

      this.dossierCommService.emitChange(params.id);

      // this.config = dataset.dossier1MainData;
    });

    this.route.params.subscribe(params => {
      this.config = dataset.underwriterLists;
    });
  }
}
