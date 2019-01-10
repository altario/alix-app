// angular
import { Routes } from '@angular/router';

// components
import { RestructuringListComponent } from './restructuring-list/restructuring-list.component';
import { RestructuringDetailComponent } from './restructuring-detail/restructuring-detail.component';

export const RestructuringRoutes: Routes = [
  {
    path: '',
    component: RestructuringListComponent,
  },
  {
    path: 'restructuring-detail',
    component: RestructuringDetailComponent,
  }
];
