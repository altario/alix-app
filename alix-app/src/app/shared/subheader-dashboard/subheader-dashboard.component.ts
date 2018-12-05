// angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input()
  public droplist: any = [];

  @Output()
  changeValue: any = new EventEmitter();

  @Input()
  public dropvalue: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.config = dataset.dossiersMainData.dossier1;
    });
  }

  onChange(event) {

    this.dropvalue = event.target.value;
    this.changeValue.emit(event.target.value);
  }

}
