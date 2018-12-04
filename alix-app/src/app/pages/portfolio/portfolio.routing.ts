// angular
import { Routes } from '@angular/router';

// components
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

export const PortfolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioListComponent,
  }
];
