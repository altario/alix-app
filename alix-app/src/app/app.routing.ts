// routes
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  }
  // {
  //   path: '**',
  //   redirectTo: 'error/404'
  // },
  // {
  //   path: 'styling',
  //   loadChildren: './styling/styling.module#StylingModule'
  // }
];
