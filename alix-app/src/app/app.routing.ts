import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './core';

import { StylesComponent } from './styles/styles.component';

export const AppRoutes: Routes = [
  {
    path: '', component: BaseLayoutComponent,
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'styles',
    component: StylesComponent
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
