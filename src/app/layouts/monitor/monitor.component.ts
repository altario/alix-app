// angular
import { Component, OnInit } from '@angular/core';

// anim
import { fadeAnimation } from '@app/animations';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
  animations: [fadeAnimation]
})
export class MonitorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
