// angular
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { PagesRoutes } from './pages.routing';

// components
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { CounterpartsComponent } from './counterparts/counterparts.component';

import { BaseLayoutComponent, PortfolioLayoutComponent } from '@core/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [
    DashboardComponent,
    MonitoringComponent,
    ReportsComponent,
    CounterpartsComponent,
    BaseLayoutComponent,
    PortfolioLayoutComponent
  ]
})
export class PagesModule { }
