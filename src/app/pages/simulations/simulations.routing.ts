// angular
import { Routes } from '@angular/router';

// components
import { SimulationsListComponent } from './simulations-list/simulations-list.component';
import { FinancialComponent } from './financial/financial.component';
import { StateOfConservationComponent } from './state-of-conservation/state-of-conservation.component';
import { LocationComponent } from './location/location.component';
import { DemandAndOfferComponent } from './demand-offer/demand-offer.component';
import { MatchComponent } from './match/match.component';

// layouts
import { SimulationsLayoutComponent } from '@core/index';

export const SimulationsRoutes: Routes = [
  {
    path: '',
    component: SimulationsListComponent,
  },
  {
    path: ':id',
    component: SimulationsLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'match',
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
      },
      {
        path: 'match',
        component: MatchComponent
      }
    ]
  }
];
