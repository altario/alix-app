// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// plugins
import { MomentModule } from 'ngx-moment';
import { NgPipesModule } from 'ngx-pipes';

// routes
import { RestructuringRoutes } from './restructuring.routing';

// components
import { RestructuringListComponent } from './restructuring-list/restructuring-list.component';
import { RestructuringDetailComponent } from './restructuring-detail/restructuring-detail.component';

// shared
import { SharedModule } from '@shared/shared.module';

// plugins
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(RestructuringRoutes),
    AccordionModule.forRoot(),
    SharedModule,
    MomentModule,
    NgPipesModule
  ],
  declarations: [
    RestructuringListComponent,
    RestructuringDetailComponent
  ],
  providers: []
})
export class RestructuringModule {}
