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

// ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap';

// not-found
import { NotFoundComponent } from './not-found/not-found.component';


//AGM
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

      // ngx-bootstrap
      BsDropdownModule.forRoot(),

        //AGM
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC_wMmBNunjK0XEu_HTlGrsOhVVHfyppN0'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
