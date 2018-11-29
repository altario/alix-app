// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// portfolio
import { FinancialComponent } from './financial/financial.component';
import { StateOfConservationComponent } from './state-of-conservation/state-of-conservation.component';
import { LocationComponent } from './location/location.component';
import { DemandAndOfferComponent } from './demand-offer/demand-offer.component';

// routes
import { PortfolioRoutes } from './portfolio.routing';

// plugins
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng5SliderModule } from 'ng5-slider';

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
  LineComponent
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
  Panel13Component,
  Panel14Component
} from '@shared/panels/index';

import { SliderRangeComponent } from '../../shared/slider-range/slider-range.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PortfolioRoutes),
    NgxEchartsModule,
    Ng5SliderModule
  ],
  declarations: [
    // pages
    FinancialComponent,
    StateOfConservationComponent,
    LocationComponent,
    DemandAndOfferComponent,

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
    Panel13Component,
    Panel14Component,

    // Slider
    SliderRangeComponent
  ]
})
export class PortfolioModule { }
