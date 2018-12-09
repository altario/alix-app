// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// anim
import { fadeAnimation } from '@app/animations';

// data
import * as dataset from '@data/dataset';

@Component({
    selector: 'app-simulations-layout',
    templateUrl: './simulations-layout.component.html',
    styleUrls: ['./simulations-layout.component.scss'],
    animations: [fadeAnimation]
})
export class SimulationsLayoutComponent implements OnInit {
  public config: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.config = dataset.dossiersMainData.dossier1;
    });
  }
}
