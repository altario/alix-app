// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-ngx-search',
  templateUrl: './ngx-search.component.html',
  styleUrls: ['./ngx-search.component.scss']
})
export class NgxSearchComponent implements OnInit {
  // search default
  formSearchDefault = `
<div class="form-group">
  <div class="input-group">
    <ngx-select class="form-control form-control-search" id="exampleInputEmail16" [placeholder]="'Please select'" [items]="ngxSelectItems" [allowClear]="true"></ngx-select>
  </div>
</div>
  `

  // search default disabled
  formSearchDefaultDisabled = `
<div class="form-group">
  <div class="input-group">
    <ngx-select class="form-control form-control-search" id="exampleInputEmail16" [placeholder]="'Please select'" [items]="ngxSelectItems" [allowClear]="true" [disabled]="true"></ngx-select>
  </div>
</div>
  `

  selectControl = new FormControl()

  ngxSelectItems = [
    'When is Thanksgiving',
    'When I grow up',
    'When It Rains It Pours',
    'When Time Go Back',
    'When She Loved Me'
  ]

  constructor() {}

  ngOnInit() {}
}
