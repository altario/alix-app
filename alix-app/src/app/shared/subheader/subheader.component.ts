// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// data
import * as dataset from '@data/dataset';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  public config: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.config = dataset.dossiersMainData.dossier1;
    });
  }

}
