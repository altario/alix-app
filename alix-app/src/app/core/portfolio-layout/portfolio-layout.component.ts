// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as dataset from '@data/dataset';

@Component({
    selector: 'app-portfolio-layout',
    templateUrl: './portfolio-layout.component.html',
    styleUrls: ['./portfolio-layout.component.scss']
})
export class PortfolioLayoutComponent implements OnInit {
  public config: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.config = dataset.dossiersMainData.dossier1;
    })
  }
}
