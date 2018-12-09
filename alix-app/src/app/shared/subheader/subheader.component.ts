// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// data
import * as dataset from '@data/dataset';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  public config: any;
  public isSimulation = false;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    if ((this.route as any)._routerState.snapshot.url.indexOf('underwriter') !== -1) {
      this.isSimulation = true;
    }
    this.route.params.subscribe(params => {
      this.config = dataset.dossiersMainData.dossier1;
    });
  }

  goBack() {
    this.location.back();
    // window.history.go(-2);
  }
}
