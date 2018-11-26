// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  // grid bootstrap example
  gridBootstrapExample = `
<div class="container-fluid">
  <div class="row">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
  <div class="row">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
</div>
  `

  // grid with no gutters
  gridWithNoGutters = `
<div class="container-fluid">
  <div class="row no-gutters">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
  <div class="row no-gutters">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
</div>
  `

  // grid with gutters nano
  gridWithGuttersNano = `
<div class="container-fluid">
  <div class="row gutter-nano">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
  <div class="row gutter-nano">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
</div>
  `

  // grid with gutters tiny
  gridWithGuttersTiny = `
<div class="container-fluid">
  <div class="row gutter-tiny">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
  <div class="row gutter-tiny">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
</div>
  `

  // grid with gutters small
  gridWithGuttersSmall = `
<div class="container-fluid">
  <div class="row gutter-small">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
  <div class="row gutter-small">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
</div>
  `

  // grid with gutters normal
  gridWithGuttersNormal = `
<div class="container-fluid">
  <div class="row gutter-normal">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
  <div class="row gutter-normal">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
</div>
  `

  // grid with gutters big
  gridWithGuttersBig = `
<div class="container-fluid">
  <div class="row gutter-big">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
  <div class="row gutter-big">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
</div>
  `

  // grid with gutters huge
  gridWithGuttersHuge = `
<div class="container-fluid">
  <div class="row gutter-huge">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
  <div class="row gutter-huge">
    <div class="col">...</div>
    <div class="col">...</div>
    <div class="col">...</div>
  </div>
</div>
  `

  constructor() {}

  ngOnInit() {}
}
