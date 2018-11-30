import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-21',
  templateUrl: './panel-21.component.html',
  styleUrls: ['./panel-21.component.scss']
})
export class Panel21Component implements OnInit {

  @Input()
  public config: any;

  constructor() { }

  ngOnInit() {
  }

}
