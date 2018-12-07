// angular
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { PagesRoutes } from './pages.routing';

// pages
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { CounterpartsComponent } from './counterparts/counterparts.component';
import { SimulationsComponent } from './simulations/simulations.component';

import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';

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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    SharedModule,
    HeaderModule
  ],
  declarations: [
    // layouts
    BaseLayoutComponent,
    MonitorComponent,
    UnderwriterComponent,

    // pages
    DashboardComponent,
    MonitoringComponent,
    ReportsComponent,
    CounterpartsComponent,
    SimulationsComponent,

    CreatePortfolioComponent,

    // components
    SubheaderDashboardComponent,

    LoginComponent
  ]
})
export class PagesModule { }
