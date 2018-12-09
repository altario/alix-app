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
import { SimulationsListComponent } from './simulations-list/simulations-list.component';
import { MatchComponent } from './match/match.component';

// components

// routes
import { SimulationsRoutes } from './simulations.routing';

// modules
import { SharedModule } from '@shared/shared.module';

// layouts
import { SimulationsLayoutComponent } from '@core/index';

// services
import { PositionsReportService } from '@services/positions-report.service';

// plugins
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(SimulationsRoutes),
    SharedModule,
      AgmCoreModule
  ],
  declarations: [
    // layout
    SimulationsLayoutComponent,

    // pages
    FinancialComponent,
    StateOfConservationComponent,
    LocationComponent,
    DemandAndOfferComponent,
    SimulationsListComponent,
    MatchComponent

    // components
  ],
  providers: [PositionsReportService]
})
export class SimulationsModule { }
