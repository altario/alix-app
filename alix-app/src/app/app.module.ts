// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// routes
import { AppRoutes } from './app.routing';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

// import { BaseLayoutComponent } from './core/base-layout/base-layout.component';
// import { PortfolioLayoutComponent } from './core/portfolio-layout/portfolio-layout.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
    declarations: [
      // app
      AppComponent,

      // components
      HeaderComponent,
      // BaseLayoutComponent,
      // PortfolioLayoutComponent,
      // DashboardComponent
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
export class AppModule {}
