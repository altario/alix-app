// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { NplDashboardComponent } from '../npl/npl-dashboard/npl-dashboard.component';
import { NplPortfolioComponent } from '../npl/npl-portfolio/npl-portfolio.component';
import { NplPortfolioDetailComponent } from './npl-portfolio-detail/npl-portfolio-detail.component';

// layouts
import { NplLayoutComponent } from '@app/core/npl-layout/npl-layout.component';

export const NplRoutes: Routes = [
  {
    path: '',
    component: NplLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: NplDashboardComponent,
      },
      {
        path: 'portfolio',
        component: NplPortfolioComponent,
      },
      {
        path: 'portfolio-detail',
        component: NplPortfolioDetailComponent,
      },
    ]
  }
];
