import { Routes } from '@angular/router';
import { StylesComponent } from './styles/styles.component';
import { BaseLayoutComponent, PortfolioLayoutComponent } from './core';

export const AppRoutes: Routes = [
    {
        path: 'portfolio/:id',
        component: PortfolioLayoutComponent,
        loadChildren: './pages/portfolio/portfolio.module#PortfolioModule'
    },
    {
        path: '',
        component: BaseLayoutComponent,
        loadChildren: './pages/position/position.module#PositionModule'
    },
    {
        path: '**',
        redirectTo: 'error/404'
    },
    {
        path: 'styles',
        component: StylesComponent
    }
];
