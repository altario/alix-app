// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// data
import * as dataset from '@data/dataset';

@Component({
  selector: 'app-subheader-dashboard',
  templateUrl: './subheader-dashboard.component.html',
  styleUrls: ['./subheader-dashboard.component.scss']
})
export class SubheaderDashboardComponent implements OnInit {
  public config: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.config = dataset.dossiersMainData.dossier1;
    });
  }

}
