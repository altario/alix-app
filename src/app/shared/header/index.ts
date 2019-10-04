// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './header.component';

// modules
import { UserMenuModule } from '@shared/user-menu';
import { LogoModule } from '@shared/logo';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserMenuModule,
    LogoModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
