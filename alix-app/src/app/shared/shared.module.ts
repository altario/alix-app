// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// plugins
import { Ng5SliderModule } from 'ng5-slider';
import { NgxEchartsModule } from 'ngx-echarts';
import { MomentModule } from 'ngx-moment';
import { NgPipesModule } from 'ngx-pipes';

// components
import { SliderRangeComponent } from '@shared/slider-range/slider-range.component';
import { DropdownComponent } from '@shared/dropdown/dropdown.component';
import { ReportSelectorComponent } from '@shared/report-selector/report-selector.component';
import { ReportStickyComponent } from '@shared/report-sticky/report-sticky.component';
import { SubheaderComponent } from '@shared/subheader/subheader.component';
// import { SubheaderDashboardComponent } from '@shared/subheader-dashboard/subheader-dashboard.component';

import { PositionRowComponent } from './position/position.component';
import { SimulationRowComponent } from './simulation/simulation.component';
import { NotificationRowComponent } from './notification/notification.component';

// pipes
import {
  CustomCurrencyPipe,
  CustomPercentagePipe,
  CustomDateConverterPipe,
  CustomDecimalPipe,
  PositiveNegativeDirective,
  NumericalValuesDirective
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
  Panel35Component,
  Paneldash1Component,
  Paneldash2Component
} from '@shared/panels/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // plugins
    NgxEchartsModule,
    Ng5SliderModule,
    MomentModule,
    NgPipesModule
  ],
  declarations: [
    // pipes
    CustomCurrencyPipe,
    CustomPercentagePipe,
    CustomDateConverterPipe,
    CustomDecimalPipe,
    PositiveNegativeDirective,
    NumericalValuesDirective,

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
    Paneldash1Component,
    Paneldash2Component,

    // components
    SliderRangeComponent,
    DropdownComponent,
    ReportSelectorComponent,
    ReportStickyComponent,
    Paneldash1Component,
    PositionRowComponent,
    NotificationRowComponent,
    SimulationRowComponent,
    SubheaderComponent
  ],
  providers: [],
  exports: [
    // pipes
    CustomCurrencyPipe,
    CustomPercentagePipe,
    CustomDateConverterPipe,
    NumericalValuesDirective,
    PositiveNegativeDirective,

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
    Paneldash1Component,
    Paneldash2Component,

    // components
    SliderRangeComponent,
    DropdownComponent,
    ReportSelectorComponent,
    ReportStickyComponent,
    PositionRowComponent,
    NotificationRowComponent,
    SimulationRowComponent,
    SubheaderComponent
  ]
})
export class SharedModule {}
