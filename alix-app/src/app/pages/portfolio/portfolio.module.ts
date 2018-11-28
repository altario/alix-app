import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FinancialComponent } from './financial/financial.component';
import { LocationPortfolioComponent } from './location-portfolio/location-portfolio.component';
import { DemandAndOfferPortfolioComponent } from './demand-offer-portfolio/demand-offer-portfolio.component';
import { PortfolioRoutes } from './portfolio.routing';

import { NgxEchartsModule } from 'ngx-echarts';

import {
    AreaBasicComponent,
    AreaStackComponent,
    BarComponent,
    BoxplotComponent,
    BubbleComponent,
    DoughnutComponent,
    RadarComponent,
    ScatterComponent,
    ScatterMapComponent
} from '../../shared/charts/index';

import {
    Panel1Component,
    Panel2Component,
    Panel3Component,
    Panel4Component,
    Panel5Component,
    Panel6Component,
    Panel7Component,
    Panel8Component
} from '../../shared/panels/index';

import { Ng5SliderModule } from 'ng5-slider';

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
        LocationPortfolioComponent,
        DemandAndOfferPortfolioComponent,

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

        // panels
        Panel1Component,
        Panel2Component,
        Panel3Component,
        Panel4Component,
        Panel5Component,
        Panel6Component,
        Panel7Component,
        Panel8Component
    ]
})
export class PortfolioModule {}
