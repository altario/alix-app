// angular
import { Component, OnInit } from '@angular/core';

import { MockapiService } from '../../../services/mockapi.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const filterSortArray = []; // [2, 1, ...]

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
  public portfolios$: Observable<any>;

  constructor(private apiService: MockapiService) {
    this.portfolios$ = this.apiService.getPortfoliosPopulated().pipe(
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
