import { Routes } from "@angular/router";
import { MainPortfolioComponent } from "./main-portfolio/main-portfolio.component";
import { LocationPortfolioComponent } from "./location-portfolio/location-portfolio.component";
import { DemandAndOfferPortfolioComponent } from "./demand-offer-portfolio/demand-offer-portfolio.component";

export const PortfolioRoutes: Routes = [
    {
        path: "location",
        component: LocationPortfolioComponent
    },
    {
        path: "demand-offer",
        component: DemandAndOfferPortfolioComponent
    },
    {
        path: "",
        component: MainPortfolioComponent
    }
];
