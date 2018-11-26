// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-ngx-chips',
  templateUrl: './ngx-chips.component.html',
  styleUrls: ['./ngx-chips.component.scss']
})
export class NgxChipsComponent implements OnInit {
  // chips
  formChips = `
<tag-input class="chips" [(ngModel)]='items'></tag-input>
  `

  items = ['Pizza', 'Pasta', 'Parmesan']

  constructor() {}

  ngOnInit() {}
}
