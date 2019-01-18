// angular
import { Routes } from '@angular/router';

// components
import { PnoListComponent } from './pno-list/pno-list.component';
import { PnoDetailComponent } from './pno-detail/pno-detail.component';

export const PnoRoutes: Routes = [
  {
    path: '',
    component: PnoListComponent,
  },
  {
    path: 'pno-detail',
    component: PnoDetailComponent,
  }
];
