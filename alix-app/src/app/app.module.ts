import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";

/**
 * Generic app routes
 */
import { AppRoutes } from "./app.routing";

/**
 * Include generic app component
 */

import { AppComponent } from "./app.component";
import { BaseLayoutComponent } from "./core/base-layout/base-layout.component";
import { DashboardLayoutComponent } from "./core/dashboard-layout/dashboard-layout.component";

/**
 * echarts
 */

import { NgxEchartsModule } from "ngx-echarts";
import { StylesComponent } from "./styles/styles.component";

@NgModule({
    declarations: [
        AppComponent,
        BaseLayoutComponent,
        StylesComponent,
        DashboardLayoutComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { enableTracing: true }),
        NgbModule.forRoot(),
        HttpModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
