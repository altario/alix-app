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

@NgModule({
    declarations: [
      // app
      AppComponent,

      // components
      HeaderComponent,
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(
        AppRoutes,
        // { scrollPositionRestoration: 'enabled' }
      ),
      NgbModule.forRoot(),
      HttpModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
