import { Routes } from '@angular/router';

import { StylesComponent } from './styles/styles.component';
import { PanelsComponent } from './panels/panels.component';

export const StylingRoutes: Routes = [
  {
    path: '',
    component: StylesComponent
  },
  {
    path: 'styles',
    component: StylesComponent
  },
  {
    path: 'panels',
    component: PanelsComponent
  }
];
