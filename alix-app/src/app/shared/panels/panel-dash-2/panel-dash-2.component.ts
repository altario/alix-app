import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-dash-2',
  templateUrl: './panel-dash-2.component.html',
  styleUrls: ['./panel-dash-2.component.scss']
})
export class Paneldash2Component implements OnInit {

    @Input()
    public config: any;

  constructor() { }

  ngOnInit() {
  }

}
