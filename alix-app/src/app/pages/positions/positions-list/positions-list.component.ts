// angular
import { Component, OnInit } from '@angular/core';

import { MockapiService } from '../../../services/mockapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent implements OnInit {
  public positions$: Observable<any>;

  constructor(private apiService: MockapiService) {
    this.positions$ = this.apiService.getPositions();
  }

  ngOnInit() {}
}
