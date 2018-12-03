import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// plugins
import { Ng5SliderModule } from 'ng5-slider';
import { NgxEchartsModule } from 'ngx-echarts';

// components
import { SliderRangeComponent } from '@shared/slider-range/slider-range.component';
import { DropdownComponent } from '@shared/dropdown/dropdown.component';
import { ReportSelectorComponent } from '@shared/report-selector/report-selector.component';
import { ReportStickyComponent } from '@shared/report-sticky/report-sticky.component';

// pipes
import {
  CustomCurrencyPipe,
  CustomPercentagePipe,
  CustomDateConverterPipe
} from '@helpers/index';

// charts
import {
  AreaBasicComponent,
  AreaStackComponent,
  BarComponent,
  BoxplotComponent,
  BubbleComponent,
  DoughnutComponent,
  RadarComponent,
  ScatterComponent,
  ScatterMapComponent,
  LineComponent,
  TreemapComponent
} from '@shared/charts/index';

// panels
import {
  Panel1Component,
  Panel2Component,
  Panel3Component,
  Panel4Component,
  Panel5Component,
  Panel6Component,
  Panel7Component,
  Panel8Component,
  Panel9Component,
  Panel10Component,
  Panel11Component,
  Panel12Component,
  Panel13Component,
  Panel14Component,
  Panel15Component,
  Panel21Component,
  Panel22Component,
  Panel23Component,
  Panel24Component,
  Panel25Component,
  Panel26Component,
  Panel27Component,
  Panel28Component,
  Panel29Component,
  Panel30Component,
  Panel31Component,
  Panel16Component,
  Panel17Component,
  Panel18Component,
  Panel19Component,
  Panel20Component,
  Panel32Component,
  Panel33Component,
  Panel34Component,
  Panel35Component
} from '@shared/panels/index';

@NgModule({
  imports: [
    CommonModule,

    //plugins
    NgxEchartsModule,
    Ng5SliderModule
  ],
  declarations: [
    // pipes
    CustomCurrencyPipe,
    CustomPercentagePipe,
    CustomDateConverterPipe,

    // charts
    AreaBasicComponent,
    AreaStackComponent,
    BarComponent,
    BoxplotComponent,
    BubbleComponent,
    DoughnutComponent,
    RadarComponent,
    ScatterComponent,
    ScatterMapComponent,
    LineComponent,
    TreemapComponent,

    // panels
    Panel1Component,
    Panel2Component,
    Panel3Component,
    Panel4Component,
    Panel5Component,
    Panel6Component,
    Panel7Component,
    Panel8Component,
    Panel9Component,
    Panel10Component,
    Panel11Component,
    Panel12Component,
    Panel13Component,
    Panel14Component,
    Panel15Component,
    Panel16Component,
    Panel17Component,
    Panel18Component,
    Panel19Component,
    Panel20Component,
    Panel21Component,
    Panel22Component,
    Panel23Component,
    Panel24Component,
    Panel25Component,
    Panel26Component,
    Panel27Component,
    Panel28Component,
    Panel29Component,
    Panel30Component,
    Panel31Component,
    Panel32Component,
    Panel33Component,
    Panel34Component,
    Panel35Component,

    // components
    SliderRangeComponent,
    DropdownComponent,
    ReportSelectorComponent,
    ReportStickyComponent,
  ],
  providers: [
  ],
  exports: [
    // pipes
    CustomCurrencyPipe,
    CustomPercentagePipe,
    CustomDateConverterPipe,

    // charts
    AreaBasicComponent,
    AreaStackComponent,
    BarComponent,
    BoxplotComponent,
    BubbleComponent,
    DoughnutComponent,
    RadarComponent,
    ScatterComponent,
    ScatterMapComponent,
    LineComponent,
    TreemapComponent,

    // panels
    Panel1Component,
    Panel2Component,
    Panel3Component,
    Panel4Component,
    Panel5Component,
    Panel6Component,
    Panel7Component,
    Panel8Component,
    Panel9Component,
    Panel10Component,
    Panel11Component,
    Panel12Component,
    Panel13Component,
    Panel14Component,
    Panel15Component,
    Panel16Component,
    Panel17Component,
    Panel18Component,
    Panel19Component,
    Panel20Component,
    Panel21Component,
    Panel22Component,
    Panel23Component,
    Panel24Component,
    Panel25Component,
    Panel26Component,
    Panel27Component,
    Panel28Component,
    Panel29Component,
    Panel30Component,
    Panel31Component,
    Panel32Component,
    Panel33Component,
    Panel34Component,
    Panel35Component,

    // components
    SliderRangeComponent,
    DropdownComponent,
    ReportSelectorComponent,
    ReportStickyComponent,
  ]
})
export class SharedModule { }
