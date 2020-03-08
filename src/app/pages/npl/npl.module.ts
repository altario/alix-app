// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// plugins
import { MomentModule } from 'ngx-moment';
import { NgPipesModule } from 'ngx-pipes';

// routes
import { NplRoutes } from './npl.routing';

// components
import { NplDashboardComponent } from './npl-dashboard/npl-dashboard.component';
import { NplPortfolioComponent } from './npl-portfolio/npl-portfolio.component';
import { NplPortfolioDetailComponent } from './npl-portfolio-detail/npl-portfolio-detail.component';

// layouts
import { NplLayoutComponent } from '@app/core/npl-layout/npl-layout.component';

// shared
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(NplRoutes),
    SharedModule,
    MomentModule,
    NgPipesModule
  ],
  declarations: [
    NplDashboardComponent,
    NplPortfolioComponent,
    NplPortfolioDetailComponent,

    NplLayoutComponent,
  ],
  providers: []
})
export class NplModule {}
