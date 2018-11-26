// angular
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  // ----------------------------------------
  // SIZE
  // ----------------------------------------

  // size tiny --------------------

  // size tiny: default
  buttonTiny = `
<button type="button" class="btn btn-primary btn-tiny">Button</button>
  `

  // size tiny: outline
  buttonOutlineTiny = `
<button type="button" class="btn btn-outline-primary btn-tiny">Button</button>
  `

  // size tiny: ghost
  buttonGhostTiny = `
<button type="button" class="btn btn-ghost-primary btn-tiny">Button</button>
  `

  // size small --------------------

  // size small: default
  buttonSmall = `
<button type="button" class="btn btn-primary btn-small">Button</button>
  `

  // size small: outline
  buttonOutlineSmall = `
<button type="button" class="btn btn-outline-primary btn-small">Button</button>
  `

  // size small: ghost
  buttonGhostSmall = `
<button type="button" class="btn btn-ghost-primary btn-small">Button</button>
  `

  // size --------------------

  // size: default
  button = `
<button type="button" class="btn btn-primary">Button</button>
  `

  // size: outline
  buttonOutline = `
<button type="button" class="btn btn-outline-primary">Button</button>
  `

  // size: ghost
  buttonGhost = `
<button type="button" class="btn btn-ghost-primary">Button</button>
  `

  // size big --------------------

  // size big: default
  buttonBig = `
<button type="button" class="btn btn-primary btn-big">Button</button>
  `

  // size big: outline
  buttonOutlineBig = `
<button type="button" class="btn btn-outline-primary btn-big">Button</button>
  `

  // size big: ghost
  buttonGhostBig = `
<button type="button" class="btn btn-ghost-primary btn-big">Button</button>
  `

  // size huge --------------------

  // size huge: default
  buttonHuge = `
<button type="button" class="btn btn-primary btn-huge">Button</button>
  `

  // size huge: outline
  buttonOutlineHuge = `
<button type="button" class="btn btn-outline-primary btn-huge">Button</button>
  `

  // ----------------------------------------
  // ICONLEFT
  // ----------------------------------------

  // iconleft small --------------------

  // iconleft small: default
  buttonSmallIconLeft = `
<button type="button" class="btn btn-primary btn-small btn-icon-left">
  <i class="air ai-calendar"></i>
  Button Small
</button>
  `

  // iconleft small: outline
  buttonOutlineSmallIconLeft = `
<button type="button" class="btn btn-outline-primary btn-small btn-icon-left">
  <i class="air ai-calendar"></i>
  Button Small
</button>
  `

  // iconleft small: ghost
  buttonGhostSmallIconLeft = `
<button type="button" class="btn btn-ghost-primary btn-small btn-icon-left">
  <i class="air ai-calendar"></i>
  Button Small
</button>
  `

  // iconleft --------------------

  // iconleft: default
  buttonIconLeft = `
<button type="button" class="btn btn-primary btn-icon-left">
  <i class="air ai-calendar"></i>
  Button Small
</button>
  `

  // iconleft: outline
  buttonOutlineIconLeft = `
<button type="button" class="btn btn-outline-primary btn-icon-left">
  <i class="air ai-calendar"></i>
  Button Small
</button>
  `

  // iconleft: ghost
  buttonGhostIconLeft = `
<button type="button" class="btn btn-ghost-primary btn-icon-left">
  <i class="air ai-calendar"></i>
  Button Small
</button>
  `

  // iconleft big --------------------

  // iconleft big: default
  buttonBigIconLeft = `
<button type="button" class="btn btn-primary btn-big btn-icon-left">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // iconleft big: outline
  buttonOutlineBigIconLeft = `
<button type="button" class="btn btn-primary btn-big btn-icon-left">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // iconleft big: ghost
  buttonGhostBigIconLeft = `
<button type="button" class="btn btn-ghost-primary btn-big btn-icon-left">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // ----------------------------------------
  // ICONRIGHT
  // ----------------------------------------

  // iconright small --------------------

  // iconright small: default
  buttonSmallIconRight = `
<button type="button" class="btn btn-primary btn-small btn-icon-right">
  Button Small
  <i class="air ai-calendar"></i>
</button>
  `

  // iconright small: outline
  buttonOutlineSmallIconRight = `
<button type="button" class="btn btn-outline-primary btn-small btn-icon-right">
  Button Small
  <i class="air ai-calendar"></i>
</button>
  `

  // iconright small: ghost
  buttonGhostSmallIconRight = `
<button type="button" class="btn btn-ghost-primary btn-small btn-icon-right">
  Button Small
  <i class="air ai-calendar"></i>
</button>
  `

  // iconright --------------------

  // iconright: default
  buttonIconRight = `
<button type="button" class="btn btn-primary btn-icon-right">
  Button Small
  <i class="air ai-calendar"></i>
</button>
  `

  // iconright: outline
  buttonOutlineIconRight = `
<button type="button" class="btn btn-outline-primary btn-icon-right">
  Button Small
  <i class="air ai-calendar"></i>
</button>
  `

  // iconright: ghost
  buttonGhostIconRight = `
<button type="button" class="btn btn-ghost-primary btn-icon-right">
  Button Small
  <i class="air ai-calendar"></i>
</button>
  `

  // iconright big --------------------

  // iconright big: default
  buttonBigIconRight = `
<button type="button" class="btn btn-primary btn-big btn-icon-right">
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconright big: outline
  buttonOutlineBigIconRight = `
<button type="button" class="btn btn-primary btn-big btn-icon-right">
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconright big: ghost
  buttonGhostBigIconRight = `
<button type="button" class="btn btn-ghost-primary btn-big btn-icon-right">
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // ----------------------------------------
  // ICONBOTH
  // ----------------------------------------

  // iconboth small --------------------

  // iconboth small: default
  buttonSmallIconBoth = `
<button type="button" class="btn btn-primary btn-small btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconboth small: outline
  buttonOutlineSmallIconBoth = `
<button type="button" class="btn btn-outline-primary btn-small btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconboth small: ghost
  buttonGhostSmallIconBoth = `
<button type="button" class="btn btn-ghost-primary btn-small btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconboth --------------------

  // iconboth: default
  buttonIconBoth = `
<button type="button" class="btn btn-primary btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconboth: outline
  buttonOutlineIconBoth = `
<button type="button" class="btn btn-outline-primary btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconboth: ghost
  buttonGhostIconBoth = `
<button type="button" class="btn btn-ghost-primary btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconboth big --------------------

  // iconboth big: default
  buttonBigIconBoth = `
<button type="button" class="btn btn-primary btn-big btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconboth big: outline
  buttonOutlineBigIconBoth = `
<button type="button" class="btn btn-primary btn-big btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // iconboth big: ghost
  buttonGhostBigIconBoth = `
<button type="button" class="btn btn-ghost-primary btn-big btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // ----------------------------------------
  // COLOR
  // ----------------------------------------

  // color --------------------

  // color: default
  buttonColor = `
<button type="button" class="btn btn-primary">Default</button>
  `

  // color: js-cta
  buttonColorJsCta = `
<button type="button" class="btn btn-js-cta">Button</button>
  `

  // color: ag-cta
  buttonColorAgCta = `
<button type="button" class="btn btn-ag-cta">Button</button>
  `

  // color: secondary
  buttonColorSecondary = `
<button type="button" class="btn btn-secondary">Button</button>
  `

  // color: gray medium
  buttonColorGrayMedium = `
<button type="button" class="btn btn-gray-medium">Button</button>
  `

  // color: light
  buttonColorLight = `
<button type="button" class="btn btn-light">Button</button>
  `

  // ----------------------------------------
  // STATES
  // ----------------------------------------

  // states --------------------

  // states: success
  buttonStatesSuccess = `
<button type="button" class="btn btn-success">Button</button>
  `

  // states: information
  buttonStatesInformation = `
<button type="button" class="btn btn-success">Button</button>
  `

  // states: warning
  buttonStatesWarning = `
<button type="button" class="btn btn-warning">Button</button>
  `

  // states: danger
  buttonStatesDanger = `
<button type="button" class="btn btn-danger">Button</button>
  `

  // states: disabled
  buttonStatesDisabled = `
<button type="button" class="btn btn-primary" disabled>Button</button>
  `

  // ----------------------------------------
  // MODIFIERS
  // ----------------------------------------

  // modifiers --------------------

  // modifiers: default js-cta small
  buttonColorModifiersJsCtaSmall = `
<button type="button" class="btn btn-js-cta btn-small">Button</button>
  `

  // modifiers: outline js-cta small
  buttonColorModifiersOutlineJsCtaSmall = `
<button type="button" class="btn btn-outline-js-cta btn-small">Button</button>
  `

  // modifiers: ghost js-cta small
  buttonColorModifiersGhostJsCtaSmall = `
<button type="button" class="btn btn-ghost-js-cta btn-small">Button</button>
  `

  // modifiers: default iconleft small
  buttonColorModifiersIconleftSmall = `
<button type="button" class="btn btn-js-cta btn-small btn-icon-left">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // modifiers: outline iconboth small
  buttonColorModifiersOutlineIconbothSmall = `
<button type="button" class="btn btn-outline-js-cta btn-small btn-icon-both">
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // modifiers: disabled
  buttonColorModifiersGhostIconrightSmall = `
<button type="button" class="btn btn-ghost-js-cta btn-small btn-icon-right">
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // ----------------------------------------
  // LOADING
  // ----------------------------------------

  // loading --------------------

  // loading: default
  buttonLoading = `
<button type="button" class="btn btn-primary btn-icon-left btn-is-loading">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // loading: outline
  buttonOutlineLoading = `
<button type="button" class="btn btn-outline-primary btn-icon-left btn-is-loading">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // loading: ghost
  buttonGhostLoading = `
<button type="button" class="btn btn-ghost-primary btn-icon-left btn-is-loading">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // ----------------------------------------
  // DISABLED
  // ----------------------------------------

  // disabled --------------------

  // disabled: default
  buttonDisabled = `
<button type="button" class="btn btn-primary btn-icon-left btn-is-loading">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // disabled: outline
  buttonOutlineDisabled = `
<button type="button" class="btn btn-outline-primary btn-icon-left btn-is-loading">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // buttonDisabled: ghost
  buttonGhostDisabled = `
<button type="button" class="btn btn-ghost-primary btn-icon-left btn-is-loading">
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // disabled --------------------

  // disabled: default
  buttonDisabledIconleft = `
<button type="button" class="btn btn-primary btn-icon-left" disabled>
  <i class="air ai-calendar"></i>
  Button
</button>
  `

  // disabled: outline
  buttonOutlineIconbothDisabled = `
<button type="button" class="btn btn-outline-primary btn-icon-both" disabled>
  <i class="air ai-calendar"></i>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // disabled: ghost
  buttonGhostIconrightDisabled = `
<button type="button" class="btn btn-ghost-primary btn-icon-right" disabled>
  Button
  <i class="air ai-calendar"></i>
</button>
  `

  // ----------------------------------------
  // TEXT TRANSFORM
  // ----------------------------------------

  // text transform --------------------

  // text transform: uppercase
  buttonTextTransformUppercase = `
<button type="button" class="btn btn-primary">Button Default</button>
  `

  // text transform: proper
  buttonTextTransformProper = `
<button type="button" class="btn btn-js-cta case-proper">Button Default</button>
  `

  // text transform: lowercase
  buttonTextTransformLowercase = `
<button type="button" class="btn btn-ag-cta case-lower">Button Default</button>
  `

  constructor() {}

  ngOnInit() {}
}
