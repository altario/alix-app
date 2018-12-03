import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-20',
  templateUrl: './panel-20.component.html',
  styleUrls: ['./panel-20.component.scss']
})
export class Panel20Component implements OnInit {

  @Input()
  public config: any;

  constructor() { }

  ngOnInit() {
  }

}
