// angular
import { Routes } from '@angular/router';

// components
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { CounterpartsComponent } from './counterparts/counterparts.component';

import { BaseLayoutComponent, PortfolioLayoutComponent } from '@core/index';

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
    component: PortfolioLayoutComponent,
    loadChildren: './portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: 'positions',
    component: BaseLayoutComponent,
    loadChildren: './position/position.module#PositionModule'
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
