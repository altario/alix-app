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
} from "../charts/index";
@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(DashboardRoutes),
        NgxEchartsModule
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
        ScatterMapComponent
    ]
})
export class DashboardModule {}
