// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// pages
import { FinancialComponent } from './financial/financial.component';
import { PerformanceComponent } from './performance/performance.component';
import { StateOfConservationComponent } from './state-of-conservation/state-of-conservation.component';
import { LocationComponent } from './location/location.component';
import { DemandAndOfferComponent } from './demand-offer/demand-offer.component';
import { PositionsListComponent } from './positions-list/positions-list.component';

// components

// routes
import { PositionsRoutes } from './positions.routing';

// modules
import { SharedModule } from '@shared/shared.module';

// layouts
import { PositionsLayoutComponent } from '@core/index';

// plugins
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PositionsRoutes),
    SharedModule,
      AgmCoreModule
  ],
  declarations: [
    // layout
    PositionsLayoutComponent,

    // pages
    FinancialComponent,
    PerformanceComponent,
    StateOfConservationComponent,
    LocationComponent,
    DemandAndOfferComponent,
    PositionsListComponent,

    // components
    // SubheaderComponent
  ]
})
export class PositionsModule { }
