// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// routes
import { PositionsRoutes } from './positions.routing';

// components
import { PositionsListComponent } from './positions-list/positions-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PositionsRoutes),
  ],
  declarations: [
    PositionsListComponent,
  ],
  providers: []
})
export class PositionsModule { }
