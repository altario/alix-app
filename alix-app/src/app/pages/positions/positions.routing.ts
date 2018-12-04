// angular
import { Routes } from '@angular/router';

// components
import { PositionsListComponent } from './positions-list/positions-list.component';

export const PositionsRoutes: Routes = [
  {
    path: '',
    component: PositionsListComponent,
  }
];
