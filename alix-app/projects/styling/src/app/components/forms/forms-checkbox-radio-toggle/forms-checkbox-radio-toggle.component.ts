// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-forms-checkbox-radio-toggle',
  templateUrl: './forms-checkbox-radio-toggle.component.html',
  styleUrls: ['./forms-checkbox-radio-toggle.component.scss']
})
export class FormsCheckboxRadioToggleComponent implements OnInit {
  // checkbox
  formCheckbox = `
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" checked>
  <label class="form-check-label" for="defaultCheck2">Checked checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" disabled>
  <label class="form-check-label" for="defaultCheck3">Disabled checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" disabled checked>
  <label class="form-check-label" for="defaultCheck4">Disabled and checked checkbox</label>
</div>
  `

  // radio buttons
  formRadioButtons = `
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">Default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">Second default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">Disabled radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios4" value="option4" disabled checked>
  <label class="form-check-label" for="exampleRadios4">Disabled radio</label>
</div>
  `

  // toggles
  formToggles = `
<div class="form-check">
  <input class="form-check-toggle" type="checkbox" value="" id="defaultToggle1">
  <label class="form-check-label" for="defaultToggle1">Default toggle</label>
</div>
<div class="form-check">
  <input class="form-check-toggle" type="checkbox" value="" id="defaultToggle2" checked>
  <label class="form-check-label" for="defaultToggle2">Checked toggle</label>
</div>
<div class="form-check">
  <input class="form-check-toggle" type="checkbox" value="" id="defaultToggle3" disabled>
  <label class="form-check-label" for="defaultToggle3">Disabled toggle</label>
</div>
<div class="form-check">
  <input class="form-check-toggle" type="checkbox" value="" id="defaultToggle4" disabled checked>
  <label class="form-check-label" for="defaultToggle4">Disabled and checked toggle</label>
</div>
  `

  constructor() {}

  ngOnInit() {}
}
