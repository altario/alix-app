import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-32',
    templateUrl: './panel-32.component.html',
    styleUrls: ['./panel-32.component.scss']
})
export class Panel32Component implements OnInit {
  @Input() public config: any;

  constructor() {}

  ngOnInit() {}
}
