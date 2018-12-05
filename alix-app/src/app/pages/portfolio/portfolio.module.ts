// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// routes
import { PortfolioRoutes } from './portfolio.routing';

// components
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

// shared
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PortfolioRoutes),
    SharedModule
  ],
  declarations: [
    PortfolioListComponent,
  ],
  providers: []
})
export class PortfolioModule { }
