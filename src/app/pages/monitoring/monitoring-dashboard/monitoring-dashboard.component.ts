// angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring-dashboard',
  templateUrl: './monitoring-dashboard.component.html',
  styleUrls: ['./monitoring-dashboard.component.scss']
})
export class MonitoringDashboardComponent implements OnInit {
  showMap = true;
  showZoom = false;

  constructor() {}
  ngOnInit() {}

  changeMap() {
    this.showMap = !this.showMap;
  }

  changeZoom() {
    this.showZoom = !this.showZoom;
  }
}
