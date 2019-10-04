// angular
import { Routes } from '@angular/router';

// components
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

export const PortfolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioListComponent,
  },
  {
    path: ':id',
    component: PortfolioDetailComponent,
  }
];
