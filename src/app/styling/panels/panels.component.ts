import { Component, OnInit } from '@angular/core';

// dataset
import * as dataset from '@data/dossier1/dataset';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {
  public config: any;

  constructor() {}

  ngOnInit() {
    this.config = dataset.dossier1MainData;
    // console.log(this.config);
  }
}
