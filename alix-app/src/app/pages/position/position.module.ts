import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PositionListComponent } from './position-list/position-list.component';
import { PositionRoutes } from './position.routing';

import { NgxEchartsModule } from 'ngx-echarts';
import { RowComponent } from './position-list/row/row.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(PositionRoutes),
        NgxEchartsModule
    ],
    declarations: [PositionListComponent, RowComponent]
})
export class PositionModule {}
