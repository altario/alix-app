// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// components
import { HeaderMonitorComponent } from './header-monitor.component';
import { UserMenuModule } from '../../user-menu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserMenuModule
  ],
  declarations: [HeaderMonitorComponent],
  exports: [HeaderMonitorComponent]
})
export class HeaderMonitorModule {}
