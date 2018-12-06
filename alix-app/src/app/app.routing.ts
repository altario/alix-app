// routes
import { Routes } from '@angular/router';

// not-found
import { NotFoundComponent } from './not-found/not-found.component';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  // {
  //   path: 'styling',
  //   loadChildren: './styling/styling.module#StylingModule'
  // }
];
