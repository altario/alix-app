// routes
import { Routes } from '@angular/router';

// components
import { BaseLayoutComponent, PortfolioLayoutComponent } from '@core/index';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    loadChildren: './pages/position/position.module#PositionModule'
  },
  {
    path: 'portfolio/:id',
    component: PortfolioLayoutComponent,
    loadChildren: './pages/portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: '**',
    redirectTo: 'error/404'
  },
  {
    path: 'styling',
    loadChildren: './styling/styling.module#StylingModule'
  }
];
