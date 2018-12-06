// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// components
import { HeaderUnderwriterComponent } from './header-underwriter.component';
import { UserMenuModule } from '../../user-menu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserMenuModule
  ],
  declarations: [HeaderUnderwriterComponent],
  exports: [HeaderUnderwriterComponent]
})
export class HeaderUnderwriterModule {}
