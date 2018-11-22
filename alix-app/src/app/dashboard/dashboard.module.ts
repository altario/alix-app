import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

import { NgxEchartsModule } from 'ngx-echarts';
import { 
    AreaComponent ,
    AreaStackComponent,
    RadarComponent
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
        AreaComponent,
        AreaStackComponent,
        RadarComponent
    ]
})
export class DashboardModule { }
