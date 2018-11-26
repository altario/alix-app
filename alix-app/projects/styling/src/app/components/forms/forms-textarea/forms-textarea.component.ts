// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-forms-textarea',
  templateUrl: './forms-textarea.component.html',
  styleUrls: ['./forms-textarea.component.scss']
})
export class FormsTextareaComponent implements OnInit {
  // textarea default
  formTextareaDefault = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail1">Input Name</label>
  </div>
  <div class="input-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>
</div>
  `

  // textarea default disabled
  formTextareaDefaultDisabled = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleFormControlTextarea2">Input Name</label>
  </div>
  <div class="input-group">
    <textarea class="form-control" id="exampleFormControlTextarea2" rows="5" disabled></textarea>
  </div>
</div>
  `

  constructor() {}

  ngOnInit() {}
}
