// angular
import { Routes } from '@angular/router';

// pages
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { RestructuringListComponent } from './restructuring/restructuring-list/restructuring-list.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { CounterpartsComponent } from './counterparts/counterparts.component';

import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';

// layouts
import { BaseLayoutComponent } from '@core/index';
import { MonitorComponent, UnderwriterComponent } from '@layouts/index';

export const PagesRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'monitor',
    component: MonitorComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'restructuring',
        component: BaseLayoutComponent,
        loadChildren: './restructuring/restructuring.module#RestructuringModule'
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
        path: 'positions',
        component: BaseLayoutComponent,
        loadChildren: './positions/positions.module#PositionsModule'
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'counterparts',
        component: CounterpartsComponent
      },
      {
        path: 'create-portfolio',
        component: CreatePortfolioComponent
      }
    ]
  },
  {
    path: 'underwriter',
    component: UnderwriterComponent,
    children: [
      {
        path: '',
        redirectTo: 'simulations',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'simulations',
        loadChildren: './simulations/simulations.module#SimulationsModule'
      },
      {
        path: 'positions',
        component: BaseLayoutComponent,
        loadChildren: './positions/positions.module#PositionsModule'
      },
      {
        path: 'counterparts',
        component: CounterpartsComponent
      }
    ]
  }
];
