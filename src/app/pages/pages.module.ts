// angular
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

// routes
import { PagesRoutes } from './page.routing';

// pages
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { CounterpartsComponent } from './counterparts/counterparts.component';

import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';
// import { CreateSimulationComponent } from './create-simulation/create-simulation.component';

// headers
import { SubheaderDashboardComponent } from '@shared/subheader-dashboard/subheader-dashboard.component';

// layouts
import { BaseLayoutComponent } from '@core/index';
import { MonitorComponent } from '@layouts/index';
import { UnderwriterComponent } from '@layouts/index';

// modules
import { HeaderModule } from '@shared/header';

// shared
import { SharedModule } from '@shared/shared.module';

import { PositionsReportService } from '@services/reports.service';

// plugins
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    SharedModule,
    HeaderModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule,
    AccordionModule.forRoot()
  ],
  declarations: [
    // layouts
    BaseLayoutComponent,
    MonitorComponent,
    UnderwriterComponent,

    // pages
    DashboardComponent,
    ReportsComponent,
    CounterpartsComponent,

    CreatePortfolioComponent,
    // CreateSimulationComponent,

    // components
    SubheaderDashboardComponent,

    LoginComponent,
  ],
  providers: [PositionsReportService]
})
export class PagesModule { }
