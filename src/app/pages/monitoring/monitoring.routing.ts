// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MonitoringDashboardComponent } from './monitoring-dashboard/monitoring-dashboard.component';
import { MonitoringIntelligenceComponent } from './monitoring-intelligence/monitoring-intelligence.component';
import { MonitoringNotificationComponent } from './monitoring-notification/monitoring-notification.component';

// layouts
import { MonitoringLayoutComponent } from '@app/core/monitoring-layout/monitoring-layout.component';

// const COMPONENTS = [
//   MonitoringDashboardComponent,
//   MonitoringIntelligenceComponent,
//   MonitoringNotificationComponent,
// ];

export const MonitoringRoutes: Routes = [
  {
    path: '',
    component: MonitoringLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: MonitoringDashboardComponent,
      },
      {
        path: 'intelligence',
        component: MonitoringIntelligenceComponent,
      },
      {
        path: 'notification',
        component: MonitoringNotificationComponent,
      }
    ]
  }
];
