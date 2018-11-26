import { RouterModule, Routes } from "@angular/router";
import { BaseLayoutComponent } from "./core";

export const AppRoutes: Routes = [
    {
        path: "",
        component: BaseLayoutComponent,
        loadChildren: "./position/position.module#PositionModule"
    },
    {
        path: "dashboard/:id",
        component: BaseLayoutComponent,
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
    },
    {
        path: "**",
        redirectTo: "error/404"
    }
];
