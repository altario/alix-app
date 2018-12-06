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

// headers
import { SubheaderDashboardComponent } from '@shared/subheader-dashboard/subheader-dashboard.component';

// layouts
import { BaseLayoutComponent } from '@core/index';
import { MonitorComponent } from '@layouts/index';
import { UnderwriterComponent } from '@layouts/index';

// modules
import { HeaderMonitorModule } from '@shared/headers/header-monitor';
import { HeaderUnderwriterModule } from '@shared/headers/header-underwriter';

// shared
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    SharedModule,
    HeaderMonitorModule,
    HeaderUnderwriterModule
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

    // components
    SubheaderDashboardComponent,

    LoginComponent
  ]
})
export class PagesModule { }
