// angular
import { Routes } from '@angular/router';

// components
import { FinancialComponent } from './financial/financial.component';
import { StateOfConservationComponent } from './state-of-conservation/state-of-conservation.component';
import { LocationComponent } from './location/location.component';
import { DemandAndOfferComponent } from './demand-offer/demand-offer.component';

export const PortfolioRoutes: Routes = [
    {
        path: '',
        component: FinancialComponent
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
  ];
