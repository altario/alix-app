// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// data
import * as dataset from '@data/dossier1/dataset';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  public config: any;
  public isMonitor = false;
  public isUnderwriter = false;

  public isSimulation = false;
  public isCreateSimulation = false;
  public isPositions = false;
  public isRealEstate = false;
  public isRetail = false;
  public isMonitoring = false;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    if ((this.route as any)._routerState.snapshot.url.indexOf('/monitor/') !== -1) {
      this.isMonitor = true;
      // console.log('isMonitor:', this.isMonitor);
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/underwriter/') !== -1) {
      this.isUnderwriter = true;
      // console.log('isUnderwriter:', this.isUnderwriter);
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/simulations/') !== -1) {
      this.isSimulation = true;
      // console.log('isSimulation:', this.isSimulation);
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/create-simulation') !== -1) {
      this.isCreateSimulation = true;
      // console.log('isCreateSimulation:', this.isCreateSimulation);
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/positions/') !== -1) {
      this.isPositions = false;
      // console.log('isPositions:', this.isPositions);
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/re/') !== -1) {
      this.isRealEstate = true;
      // console.log('isRealEstate:', this.isRealEstate);
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/retail/') !== -1) {
      this.isRetail = true;
      // console.log('isRetail:', this.isRetail);
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/monitoring/') !== -1) {
      this.isMonitoring = true;
      // console.log('isMonitoring:', this.isMonitoring);
    } else {
      this.isRealEstate = true;
      // console.log('isRealEstate:', this.isRealEstate);
    }
    this.route.params.subscribe(params => {
      this.config = dataset.dossier1MainData;
    });
  }

  goBack() {
    this.location.back();
    // window.history.go(-2);
  }

  goNowhere(event) {
    event.preventDefault();
  }
}
