// angular
import { Routes } from '@angular/router';

// components
import { FinancialComponent } from './financial/financial.component';
import { StateOfConservationComponent } from './state-of-conservation/state-of-conservation.component';
import { LocationComponent } from './location/location.component';
import { DemandAndOfferComponent } from './demand-offer/demand-offer.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioLayoutComponent } from '@core/index';


export const PortfolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioListComponent,
  },
  {
    path: ':id',
    component: PortfolioLayoutComponent,
    children: [
      { path: '', redirectTo: 'financial', pathMatch: 'full' },
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





  /*,
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
  }*/
];
