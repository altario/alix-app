// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-forms',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {
  // default empty with label
  formDefaultEmptyWithLabel = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail1">Input Name</label>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>
</div>
  `

  // default empty with placeholder
  formDefaultEmptyWithPlaceholder = `
<div class="form-group">
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Please write here">
  </div>
</div>
  `

  // default empty with label and placeholder
  formDefaultEmptywithLabelandPlaceholder = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail2">Input Name</label>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Please write here">
  </div>
</div>
  `

  // labeled 1
  formLabeled1 = `
  // <div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail3">Input Name</label>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail4">
  </div>
  <div class="feedback-group">
    <div class="feedback">Please enter a valid URL.</div>
  </div>
</div>
  `

  // labeled 2 with info
  formLabeled2WithInfo = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail3">Input Name</label>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail4">
  </div>
  <div class="feedback-group">
    <div class="feedback">Please enter a valid URL.</div>
  </div>
</div>
  `

  // labeled 3 limited to 10 characters
  formLabeled3LimitedTo10Characters = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail5">Input Name</label>
    <div class="label-count">10</div>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail6" maxlength="10">
  </div>
</div>
  `

  // mandatory width mandatory class
  formMandatoryWithMandatoryClass = `
<div class="form-group mandatory">
  <div class="label-group">
    <label for="exampleInputEmail6">Input Name</label>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail7" required>
  </div>
</div>
  `

  // filled and typing
  formFilledAndTyping = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail7">Input Name</label>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail7" value="Please write here">
  </div>
</div>
  `

  // unity 1a
  formUnity1a = `
<div class="form-group form-group-tn">
  <div class="label-group">
    <label for="exampleInputEmail8">Input Name</label>
    <div class="label-count">2</div>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail8" value="23">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i class="air ai-calendar"></i>
      </span>
    </div>
  </div>
  <div class="feedback-group">
    <div class="feedback">Value cannot be 0.</div>
    <button type="button" class="button-info" [outsideClick]="true" popover="This button is disabled because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes." placement="bottom"></button>
  </div>
</div>
  `

  // unity 1b
  formUnity1b = `
<div class="form-group form-group-sm">
  <div class="label-group">
    <label for="exampleInputEmail9">Input Name</label>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail9" value="10">
    <div class="input-group-append">
      <span class="input-group-text">days</span>
    </div>
  </div>
  <div class="feedback-group">
    <div class="feedback">Value cannot be 0.</div>
  </div>
</div>
  `

  // selected with selected and mandatory class
  formSelectedWithSelectedAndMandatoryClass = `
<div class="form-group selected mandatory">
  <div class="label-group">
    <label for="exampleInputEmail10">Input Name</label>
    <div class="label-count">-2</div>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail10" value="This is some text">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <div class="input-group-append">
      <span class="input-group-text">days</span>
    </div>
  </div>
</div>
  `

  // errors width mandatory and invalid class
  formErrorsWidthMandatoryAndInvalidClass = `
<div class="form-group mandatory invalid">
  <div class="label-group">
    <label for="exampleInputEmail10">Input Name</label>
    <div class="label-count">-2</div>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail10" value="This is some text">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <div class="input-group-append">
      <span class="input-group-text">days</span>
    </div>
  </div>
  <div class="feedback-group">
    <div class="feedback">Please enter a valid URL.</div>
  </div>
</div>
  `

  // field disabled
  formFieldDisabled = `
<div class="form-group">
  <div class="label-group">
    <label for="exampleInputEmail10">Input Name</label>
    <div class="label-count">-2</div>
  </div>
  <div class="input-group">
    <input type="email" class="form-control" id="exampleInputEmail10" value="This is some text" disabled>
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <div class="input-group-append">
      <span class="input-group-text">days</span>
    </div>
  </div>
  <div class="feedback-group">
    <div class="feedback">Please enter a valid URL.</div>
  </div>
</div>
  `

  constructor() {}

  ngOnInit() {}
}
