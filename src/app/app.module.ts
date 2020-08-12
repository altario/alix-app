// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routes
import { AppRoutes } from './app.routing';

// components
import { AppComponent } from './app.component';

// ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap';

// not-found
import { NotFoundComponent } from '@pages/not-found/not-found.component';

// services
import { LocaldataService } from '@services/localdata.service';

// plugins
import { AgmCoreModule } from '@agm/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  declarations: [
    // app
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,
      { scrollPositionRestoration: 'enabled' } // 'disabled' | 'enabled' | 'top'
    ),
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // ngx-bootstrap
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),

    // plugins
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,

    // plugins
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAZ3vXwrJfNQAgaSvnjKYyIH-NitILRZwQ' + '&libraries=visualization',
    }),
  ],
  providers: [LocaldataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
