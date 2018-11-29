import { Component, OnInit } from '@angular/core';

// dataset
import * as dataset from '@data/dataset';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {
  public config: any;

  constructor() { }

  ngOnInit() {
    this.config = dataset.dossiersMainData['dossier1'];
    console.log(this.config);
  }

}
