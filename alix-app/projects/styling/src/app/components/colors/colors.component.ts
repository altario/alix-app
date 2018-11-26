// angular
import { Component, OnInit } from '@angular/core'
import { fadeAnimation } from '../../animations'

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  animations: [fadeAnimation]
})
export class ColorsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
