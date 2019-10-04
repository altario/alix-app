// angular
import { Component, OnInit } from '@angular/core';

import { MockapiService } from '../../../services/mockapi.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const filterSortArray = []; // [2, 1, ...]

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent implements OnInit {
  public positions$: Observable<any>;

  constructor(private apiService: MockapiService) {
    this.positions$ = this.apiService.getPositions().pipe(
      map(notifications => {
        if (!filterSortArray.length) {
          return notifications;
        }
        return notifications
          .filter(a => filterSortArray.indexOf(a.id) !== -1)
          .sort((a, b) => filterSortArray.indexOf(a.id) - filterSortArray.indexOf(b.id));
      })
    );
  }

  ngOnInit() {}
}
