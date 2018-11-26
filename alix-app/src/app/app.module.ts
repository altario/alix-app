import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/**
 * Generic app routes
 */
import { AppRoutes } from './app.routing';

/**
 * Include generic app component
 */

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './core/base-layout/base-layout.component';

/**
 * echarts
 */

import { NgxEchartsModule } from 'ngx-echarts';
import { StylesComponent } from './styles/styles.component';


@NgModule({
    declarations: [
        AppComponent,
        BaseLayoutComponent,
        StylesComponent
        
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        NgbModule.forRoot(),
        HttpModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
