// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { RouterModule } from '@angular/router';
import { AppRoutes } from '@app/app.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes),
  ]
})
export class HeaderModule { }
