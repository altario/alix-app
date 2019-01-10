import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { DossiersCommunicationService } from '@services/dossiers-communication.service';
import { LocaldataService } from '@services/localdata.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  public config: object;
  imageShow: string;

  constructor(
    private route: ActivatedRoute,
    private dossierCommService: DossiersCommunicationService,
    private localData: LocaldataService
    ) {
    this.dossierCommService.changeEmitted$.subscribe(data => {
      // console.log(typeof data);
      // console.log('01', data);
      if (data === '4') {
        this.imageShow = 'match_4';
      }
      if (data === '1') {
        this.imageShow = 'match_1';
      }
      if (data === '2') {
        this.imageShow = 'match_2';
      }
      if (data === '71') {
        this.imageShow = 'match_71';
      } else {
        this.imageShow = 'match';
      }

      if (this.localData.getPageEmail().includes('gianleone@')) {
        this.imageShow = 'match_g';
      }
    });
  }

  ngOnInit() {}
}
