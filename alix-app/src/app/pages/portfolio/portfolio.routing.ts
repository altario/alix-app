import { Routes } from '@angular/router';
import { FinancialComponent } from './financial/financial.component';
import { LocationPortfolioComponent } from './location-portfolio/location-portfolio.component';
import { DemandAndOfferPortfolioComponent } from './demand-offer-portfolio/demand-offer-portfolio.component';

export const PortfolioRoutes: Routes = [
    {
        path: '',
        component: FinancialComponent
    },
    {
        path: 'location',
        component: LocationPortfolioComponent
    },
    {
        path: 'demand-offer',
        component: DemandAndOfferPortfolioComponent
    }
];
