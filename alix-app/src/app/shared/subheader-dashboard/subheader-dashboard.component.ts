// angular
import { Component, OnInit, Input, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// data
import * as dataset from '@data/dataset';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-subheader-dashboard',
  templateUrl: './subheader-dashboard.component.html',
  styleUrls: ['./subheader-dashboard.component.scss']
})
export class SubheaderDashboardComponent implements OnInit {
  public config: any;
  public leftContainerIsfixed: boolean;

  @Input()
  public droplist: any = [];

  @Input()
  public droplistids: any = {};

  @Output()
  changeValue: any = new EventEmitter();

  @Input()
  public dropvalue: any;


  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
     const num = this.document.documentElement.scrollTop;
     if ( num > 30 ) {
         this.leftContainerIsfixed = true;
     } else if (this.leftContainerIsfixed && num < 30) {
         this.leftContainerIsfixed = false;
     }

     console.log(this.leftContainerIsfixed);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.config = dataset.dossiersMainData.dossier1;
        this.dropvalue = this.droplist[0].id;
    });
  }

  onChange(event) {

    this.dropvalue = event.target.value;
    this.changeValue.emit(event.target.value);
  }

}
