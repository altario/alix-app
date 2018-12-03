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
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { RowComponent } from './portfolio-list/row/row.component';

// components
import { SliderRangeComponent } from '@shared/slider-range/slider-range.component';
import { DropdownComponent } from '@shared/dropdown/dropdown.component';
import { ReportSelectorComponent } from '@shared/report-selector/report-selector.component';
import { ReportStickyComponent } from '@shared/report-sticky/report-sticky.component';


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
  Panel17Component
} from '@shared/panels/index';

import { PortfolioLayoutComponent } from '@core/index';
import { PortfolioReportService } from '@services/portfolio-report.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PortfolioRoutes),

    // plugins
    NgxEchartsModule,
    Ng5SliderModule
  ],
  declarations: [
    PortfolioLayoutComponent,

    // pages
    FinancialComponent,
    StateOfConservationComponent,
    LocationComponent,
    DemandAndOfferComponent,
    PortfolioListComponent,
    RowComponent,

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
    Panel10Component,
    Panel11Component,
    Panel12Component,
    Panel13Component,
    Panel14Component,
    Panel15Component,
    Panel16Component,
    Panel17Component,
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

    // components
    SliderRangeComponent,
    DropdownComponent,
    ReportSelectorComponent,
    ReportStickyComponent,
  ],
  providers: [PortfolioReportService]
})
export class PortfolioModule { }
