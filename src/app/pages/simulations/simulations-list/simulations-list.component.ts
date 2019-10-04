// angular
import { Component, OnInit } from '@angular/core';

import { MockapiService } from '../../../services/mockapi.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const filterSortArray = []; // [2, 1, ...]

@Component({
  selector: 'app-simulations-list',
  templateUrl: './simulations-list.component.html',
  styleUrls: ['./simulations-list.component.scss']
})
export class SimulationsListComponent implements OnInit {
  public simulations$: Observable<any>;

  constructor(private apiService: MockapiService) {
    this.simulations$ = this.apiService.getPositions().pipe(
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
