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
  selector: 'app-npl-layout',
  templateUrl: './npl-layout.component.html',
  styleUrls: ['./npl-layout.component.scss'],
  animations: [fadeAnimation]
})
export class NplLayoutComponent implements OnInit {
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
