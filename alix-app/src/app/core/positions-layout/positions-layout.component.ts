// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as dataset from '@data/dataset';

@Component({
    selector: 'app-positions-layout',
    templateUrl: './positions-layout.component.html',
    styleUrls: ['./positions-layout.component.scss']
})
export class PositionsLayoutComponent implements OnInit {
  public config: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.config = dataset.dossiersMainData.dossier1;
    })
  }
}
