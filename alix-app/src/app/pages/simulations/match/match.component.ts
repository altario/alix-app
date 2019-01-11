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
  imageShow: string = 'match';

  constructor(
    private route: ActivatedRoute,
    private dossierCommService: DossiersCommunicationService,
    private localData: LocaldataService
    ) {
    this.dossierCommService.changeEmitted$.subscribe(data => {
      // console.log(typeof data);
      // console.log('DATA:', data);
      if (data === '4') {
        // console.log('match_4');
        this.imageShow = 'match_4';
      }
      if (data === '1') {
        // console.log('match_1');
        this.imageShow = 'match_1';
      }
      if (data === '2') {
        // console.log('match_2');
        this.imageShow = 'match_2';
      }
      if (data === '71') {
        // console.log('match_71');
        this.imageShow = 'match_71';
      }

      if (this.localData.getPageEmail().includes('pietra@')) {
        // console.log('match_g');
        this.imageShow = 'match_g';
      }

    });
  }

  ngOnInit() {}
}
