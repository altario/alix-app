// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// plugins
import { MomentModule } from 'ngx-moment';
import { NgPipesModule } from 'ngx-pipes';

// routes
import { MonitoringRoutes } from './monitoring.routing';

// components
import { MonitoringDashboardComponent } from './monitoring-dashboard/monitoring-dashboard.component';
import { MonitoringIntelligenceComponent } from './monitoring-intelligence/monitoring-intelligence.component';
import { MonitoringNotificationComponent } from './monitoring-notification/monitoring-notification.component';

// layouts
import { MonitoringLayoutComponent } from '@app/core/monitoring-layout/monitoring-layout.component';

// shared
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(MonitoringRoutes),
    SharedModule,
    MomentModule,
    NgPipesModule
  ],
  declarations: [
    MonitoringDashboardComponent,
    MonitoringIntelligenceComponent,
    MonitoringNotificationComponent,

    MonitoringLayoutComponent,
  ],
  providers: []
})
export class MonitoringModule {}
