// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// components
import { LogoComponent } from './logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LogoComponent],
  exports: [LogoComponent]
})
export class LogoModule {}
