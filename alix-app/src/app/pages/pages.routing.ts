// angular
import { Routes } from '@angular/router';

// components
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { CounterpartsComponent } from './counterparts/counterparts.component';

import { BaseLayoutComponent } from '@core/index';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'monitoring',
    component: MonitoringComponent
  },
  {
    path: 'portfolios',
    component: BaseLayoutComponent,
    loadChildren: './portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'counterparts',
    component: CounterpartsComponent
  },
];
