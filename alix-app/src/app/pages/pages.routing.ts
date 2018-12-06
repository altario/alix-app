// angular
import { Routes } from '@angular/router';

// pages
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { CounterpartsComponent } from './counterparts/counterparts.component';
import { SimulationsComponent } from './simulations/simulations.component';

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
      }
    ]
  },
  {
    path: 'underwriter',
    component: UnderwriterComponent,
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
        path: 'simulations',
        component: SimulationsComponent
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
