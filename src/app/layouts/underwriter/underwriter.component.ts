// angular
import { Component, OnInit } from '@angular/core';

// anim
import { fadeAnimation } from '@app/animations';

@Component({
  selector: 'app-underwriter',
  templateUrl: './underwriter.component.html',
  styleUrls: ['./underwriter.component.scss'],
  animations: [fadeAnimation]
})
export class UnderwriterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
