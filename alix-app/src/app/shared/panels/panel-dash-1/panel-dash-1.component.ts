import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-dash-1',
  templateUrl: './panel-dash-1.component.html',
  styleUrls: ['./panel-dash-1.component.scss']
})
export class Paneldash1Component implements OnInit {
    @Input()
    public config: any;

  constructor() { }

  ngOnInit() {
      console.log(this.config)
  }

}
