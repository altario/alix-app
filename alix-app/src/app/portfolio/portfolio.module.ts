import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MainPortfolioComponent } from "./main-portfolio/main-portfolio.component";
import { LocationPortfolioComponent } from "./location-portfolio/location-portfolio.component";
import { DemandAndOfferPortfolioComponent } from "./demand-offer-portfolio/demand-offer-portfolio.component";
import { PortfolioRoutes } from "./portfolio.routing";

import { NgxEchartsModule } from "ngx-echarts";

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
} from "../charts/index";

import {
    StackedComponent,
    SliderRangeComponent,
    PanelListRowComponent,
    PanelListComponent,
    LongPanelComponent
} from "../_components/index";

import { Ng5SliderModule } from "ng5-slider";

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(PortfolioRoutes),
        NgxEchartsModule,
        Ng5SliderModule
    ],
    declarations: [
        MainPortfolioComponent,
        LocationPortfolioComponent,
        DemandAndOfferPortfolioComponent,
        AreaBasicComponent,
        AreaStackComponent,
        BarComponent,
        BoxplotComponent,
        BubbleComponent,
        DoughnutComponent,
        RadarComponent,
        ScatterComponent,
        ScatterMapComponent,

        StackedComponent,
        SliderRangeComponent,
        PanelListRowComponent,
        PanelListComponent,
        LongPanelComponent
    ]
})
export class PortfolioModule {}
