import { Routes } from "@angular/router";
import { BaseLayoutComponent, DashboardLayoutComponent } from "./core";

export const AppRoutes: Routes = [
    {
        path: "dashboard/:id",
        component: DashboardLayoutComponent,
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
    },
    {
        path: "",
        component: BaseLayoutComponent,
        loadChildren: "./position/position.module#PositionModule"
    },
    {
        path: "**",
        redirectTo: "error/404"
    }
];
