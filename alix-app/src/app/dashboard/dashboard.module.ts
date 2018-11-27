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
        DashboardComponent,
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
export class DashboardModule { }
