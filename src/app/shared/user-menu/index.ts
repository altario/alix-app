// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// components
import { UserMenuComponent } from './user-menu.component';

// bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [CommonModule, RouterModule, BsDropdownModule],
  declarations: [UserMenuComponent],
  exports: [UserMenuComponent]
})
export class UserMenuModule {}
