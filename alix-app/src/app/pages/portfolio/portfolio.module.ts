// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// portfolio
import { FinancialComponent } from './financial/financial.component';
import { StateOfConservationComponent } from './state-of-conservation/state-of-conservation.component';
import { LocationComponent } from './location/location.component';
import { DemandAndOfferComponent } from './demand-offer/demand-offer.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { RowComponent } from './portfolio-list/row/row.component';

// routes
import { PortfolioRoutes } from './portfolio.routing';


//Shared Module
import { SharedModule } from '@shared/shared.module';

import { PortfolioLayoutComponent } from '@core/index';
import { PortfolioReportService } from '@services/portfolio-report.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PortfolioRoutes),
    SharedModule
  ],
  declarations: [
    PortfolioLayoutComponent,

    // pages
    FinancialComponent,
    StateOfConservationComponent,
    LocationComponent,
    DemandAndOfferComponent,
    PortfolioListComponent,
    RowComponent

  ],
  providers: [PortfolioReportService]
})
export class PortfolioModule { }
