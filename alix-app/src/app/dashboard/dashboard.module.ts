import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

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
} from '../charts/index';
@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(DashboardRoutes),
        NgxEchartsModule
    ],
    declarations: [
        DashboardComponent,
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
export class DashboardModule { }
