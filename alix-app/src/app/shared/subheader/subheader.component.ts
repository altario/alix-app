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
  public isSimulation = false;
  public isRealEstate = false;
  public isRetail = false;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    if ((this.route as any)._routerState.snapshot.url.indexOf('underwriter') !== -1) {
      this.isSimulation = true;
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/re/') !== -1) {
      // console.log('REAL_ESTATE');
      this.isRealEstate = true;
    }
    if ((this.route as any)._routerState.snapshot.url.indexOf('/retail/') !== -1) {
      // console.log('RETAIL');
      this.isRetail = true;
    } else {
      // console.log('REAL_ESTATE');
      this.isRealEstate = true;
    }
    this.route.params.subscribe(params => {
      this.config = dataset.dossier1MainData;
    });
  }

  goBack() {
    this.location.back();
    // window.history.go(-2);
  }
}
