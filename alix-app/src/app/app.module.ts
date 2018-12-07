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

// not-found
import { NotFoundComponent } from '@pages/not-found/not-found.component';

// services
import { LocaldataService } from '@services/localdata.service';

// plugins
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
      // app
      AppComponent,
      NotFoundComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(
        AppRoutes,
        // { scrollPositionRestoration: 'enabled' } // 'disabled' | 'enabled' | 'top'
      ),
      NgbModule.forRoot(),
      HttpModule,
      HttpClientModule,
      BrowserAnimationsModule,

      // ngx-bootstrap
      BsDropdownModule.forRoot(),

      // plugins
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyC_wMmBNunjK0XEu_HTlGrsOhVVHfyppN0'
      })
    ],
    providers: [LocaldataService],
    bootstrap: [AppComponent]
})
export class AppModule {}
