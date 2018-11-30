// angular
import { Routes } from '@angular/router';

// components
import { PositionListComponent } from './position-list/position-list.component';
import { PortfolioLayoutComponent } from '@app/core';

export const PositionRoutes: Routes = [
  {
    path: '',
    component: PositionListComponent
  }
];
