import { Component, OnInit } from '@angular/core';

import { MonitorListsService } from '../../services/monitorLists.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const filterSortArray = []; // [2, 1, ...]

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
  public notifications$: Observable<any>;

  constructor(private apiService: MonitorListsService) {
    this.notifications$ = this.apiService.getNotificationsPopulated().pipe(
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
