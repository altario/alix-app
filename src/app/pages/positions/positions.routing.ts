// angular
import { Routes } from '@angular/router';

// components
import { PositionsListComponent } from './positions-list/positions-list.component';
import { FinancialComponent } from './financial/financial.component';
import { StateOfConservationComponent } from './state-of-conservation/state-of-conservation.component';
import { LocationComponent } from './location/location.component';
import { DemandAndOfferComponent } from './demand-offer/demand-offer.component';

// layouts
import { PositionsLayoutComponent } from '@core/index';

export const PositionsRoutes: Routes = [
  {
    path: '',
    component: PositionsListComponent,
  },
  {
    path: 'position/:id',
    component: PositionsLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'financial',
        pathMatch: 'full'
      },
      {
        path: 'financial',
        component: FinancialComponent
      },
      {
        path: 'state-of-conservation',
        component: StateOfConservationComponent
      },
      {
        path: 'demand-offer',
        component: DemandAndOfferComponent
      },
      {
        path: 'location',
        component: LocationComponent
      }
    ]
  }
];
