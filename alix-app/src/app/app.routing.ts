import { Routes } from "@angular/router";
import { StylesComponent } from "./styles/styles.component";
import { BaseLayoutComponent, PortfolioLayoutComponent } from "./core";

export const AppRoutes: Routes = [
    {
        path: "portfolio/:id",
        component: PortfolioLayoutComponent,
        loadChildren: "./portfolio/portfolio.module#PortfolioModule"
    },
    {
        path: "styles",
        component: StylesComponent
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
