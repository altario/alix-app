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
import { SubheaderDashboardComponent } from '@shared/subheader-dashboard/subheader-dashboard.component';

// layouts
import { BaseLayoutComponent } from '@core/index';

// shared
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    SharedModule
  ],
  declarations: [
    // layouts
    BaseLayoutComponent,

    // pages
    DashboardComponent,
    MonitoringComponent,
    ReportsComponent,
    CounterpartsComponent,

    // components
    SubheaderDashboardComponent
  ]
})
export class PagesModule { }
