// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { PositionListComponent } from './position-list/position-list.component';
import { PositionRoutes } from './position.routing';
import { RowComponent } from './position-list/row/row.component';

// plugins
import { NgxEchartsModule } from 'ngx-echarts';

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
