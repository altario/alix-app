// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// pages
import { FinancialComponent } from './financial/financial.component';
import { StateOfConservationComponent } from './state-of-conservation/state-of-conservation.component';
import { LocationComponent } from './location/location.component';
import { DemandAndOfferComponent } from './demand-offer/demand-offer.component';
import { PositionsListComponent } from './positions-list/positions-list.component';

// components
import { RowComponent } from './positions-list/row/row.component';
import { SubheaderComponent } from '../../shared/subheader/subheader.component';

// routes
import { PositionsRoutes } from './positions.routing';

// modules
import { SharedModule } from '@shared/shared.module';

// layouts
import { PositionsLayoutComponent } from '@core/index';

// services
import { PositionsReportService } from '@services/positions-report.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PositionsRoutes),
    SharedModule
  ],
  declarations: [
    // layout
    PositionsLayoutComponent,

    // pages
    FinancialComponent,
    StateOfConservationComponent,
    LocationComponent,
    DemandAndOfferComponent,
    PositionsListComponent,

    // components
    RowComponent,
    SubheaderComponent,
  ],
  providers: [PositionsReportService]
})
export class PositionsModule { }
