// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// plugins
import { MomentModule } from 'ngx-moment';
import { NgPipesModule } from 'ngx-pipes';

// routes
import { PnoRoutes } from './pno.routing';

// components
import { PnoListComponent } from './pno-list/pno-list.component';
 import { PnoDetailComponent } from './pno-detail/pno-detail.component';

// shared
import { SharedModule } from '@shared/shared.module';
// plugins
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PnoRoutes),
    SharedModule,
    MomentModule,
    NgPipesModule,
    AgmCoreModule
  ],
  declarations: [
    PnoListComponent,
    PnoDetailComponent
  ],
  providers: []
})
export class PnoModule { }
