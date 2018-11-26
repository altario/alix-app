// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-ngx-select',
  templateUrl: './ngx-select.component.html',
  styleUrls: ['./ngx-select.component.scss']
})
export class NgxSelectComponent implements OnInit {
  // select default
  formSelectDefault = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail11">Input Name</label>
  </div>
  <div class="input-group">
    <ngx-select class="form-control form-control-select" id="exampleInputEmail11" [placeholder]="'Please select'" [items]="ngxSelectItems" [formControl]="selectControl"></ngx-select>
  </div>
</div>
  `

  // select default option selected
  formSelectDefaultOptionSelected = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail13">Input Name</label>
  </div>
  <div class="input-group">
    <ngx-select class="form-control form-control-select" id="exampleInputEmail13" [defaultValue]="ngxSelectItems[0]" [placeholder]="'Please select'" [items]="ngxSelectItems" [formControl]="selectControl"></ngx-select>
  </div>
</div>
  `

  // select default disabled
  formSelectDefaultDisabled = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail12">Input Name</label>
  </div>
  <div class="input-group">
    <ngx-select class="form-control form-control-select" id="exampleInputEmail12" [placeholder]="'Please select'" [items]="ngxSelectItems" [formControl]="selectControl" [disabled]="true"></ngx-select>
  </div>
</div>
  `

  selectControl = new FormControl()

  ngxSelectItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7']

  constructor() {}

  ngOnInit() {}
}
