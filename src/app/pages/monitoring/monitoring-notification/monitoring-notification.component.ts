// angular
import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// services
import { MonitorListsService } from '@app/services/monitorLists.service';

const filterSortArray = []; // [2, 1, ...]

@Component({
  selector: 'app-monitoring-notification',
  templateUrl: './monitoring-notification.component.html',
  styleUrls: ['./monitoring-notification.component.scss']
})
export class MonitoringNotificationComponent implements OnInit {
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
