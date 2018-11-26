// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-ng2-daterangepicker',
  templateUrl: './ng2-daterangepicker.component.html',
  styleUrls: ['./ng2-daterangepicker.component.scss']
})
export class Ng2DaterangepickerComponent implements OnInit {
  // single picker
  formSinglePicker = `
<div class="form-group form-group-lg">
  <div class="label-group">
    <label for="exampleInputEmail14">Input Name</label>
  </div>
  <div class="input-group">
    <input type="text" class="form-control form-control-daterangepicker" id="exampleInputEmail14" name="daterangeInput" daterangepicker [options]="singlePickerOptions" (selected)="singleSelect($event)" readonly/>
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i class="air ai-calendar"></i>
      </span>
    </div>
  </div>
</div>
  `

  // dateranger picker
  formDaterangePicker = `
<div class="form-group form-group-lg">
  <div class="label-group">
    <label for="exampleInputEmail15">Input Name</label>
  </div>
  <div class="input-group">
    <input type="text" class="form-control form-control-daterangepicker" id="exampleInputEmail15" name="daterangeInput" daterangepicker [options]="datePickerOptions" (selected)="selectedDate($event, daterange)" readonly/>
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i class="air ai-calendar"></i>
      </span>
    </div>
  </div>
</div>
  `

  // dateranger picker disabled
  formDaterangePickerDisabled = `
<div class="form-group form-group-lg">
  <div class="label-group">
    <label for="exampleInputEmail15">Input Name</label>
  </div>
  <div class="input-group">
    <input type="text" class="form-control form-control-daterangepicker" id="exampleInputEmail15" name="daterangeInput" daterangepicker [options]="datePickerOptions" (selected)="selectedDate($event, daterange)" readonly disabled/>
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i class="air ai-calendar"></i>
      </span>
    </div>
  </div>
</div>
  `

  singleDate: any
  singlePickerOptions = {
    locale: { format: 'DD MMM' },
    singleDatePicker: true,
    showDropdowns: true
    // opens: 'left',
  }

  daterange: any = {}
  datePickerOptions: any = {
    // locale: { format: '   DD MMM                ' },
    locale: { format: 'DD MMM' },
    alwaysShowCalendars: false,
    showDropdowns: true
  }

  constructor() {}

  ngOnInit() {}

  // Select: Single
  singleSelect(value: any) {
    this.singlePickerOptions = value.start
  }

  // Select: Range
  selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start
    datepicker.end = value.end
    this.daterange.start = value.start
    this.daterange.end = value.end
    this.daterange.label = value.label
  }
}
