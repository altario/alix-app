import { Component, OnInit } from '@angular/core';

// anim
import { fadeAnimation } from '@app/animations';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  animations: [fadeAnimation]
})
export class BaseLayoutComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
