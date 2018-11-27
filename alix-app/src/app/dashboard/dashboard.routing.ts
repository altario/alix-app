import { Routes } from "@angular/router";
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";
import { LocationDashboardComponent } from "./location-dashboard/location-dashboard.component";
import { DemandAndOfferDashboardComponent } from "./demand-offer-dashboard/demand-offer-dashboard.component";

export const DashboardRoutes: Routes = [
    {
        path: "location",
        component: LocationDashboardComponent
    },
    {
        path: "demand-offer",
        component: DemandAndOfferDashboardComponent
    },
    {
        path: "",
        component: MainDashboardComponent
    }
];
