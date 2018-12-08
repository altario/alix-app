import { Component, OnInit } from '@angular/core';

import { MockapiService } from '../../services/mockapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
  public notifications$: Observable<any>;

  constructor(private apiService: MockapiService) {
    this.notifications$ = this.apiService.getNotificationsPopulated();
  }

  ngOnInit() {}
}
