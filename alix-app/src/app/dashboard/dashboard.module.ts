import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";
import { LocationDashboardComponent } from "./location-dashboard/location-dashboard.component";
import { DemandAndOfferDashboardComponent } from "./demand-offer-dashboard/demand-offer-dashboard.component";
import { DashboardRoutes } from "./dashboard.routing";

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
} from '../charts/index';

import {
    StackedComponent,
    SliderRangeComponent
} from '../_components/index';

import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(DashboardRoutes),
        NgxEchartsModule,
        Ng5SliderModule
    ],
    declarations: [
        MainDashboardComponent,
        LocationDashboardComponent,
        DemandAndOfferDashboardComponent,
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
        
    ]
})
export class DashboardModule {}
