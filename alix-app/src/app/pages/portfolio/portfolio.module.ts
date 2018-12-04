// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// routes
import { PortfolioRoutes } from './portfolio.routing';

// components
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(PortfolioRoutes),
  ],
  declarations: [
    PortfolioListComponent,
  ],
  providers: []
})
export class PortfolioModule { }
