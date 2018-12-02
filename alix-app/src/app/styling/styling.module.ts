// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// routes
import { StylingRoutes } from './styling.routing';

// components
import { StylesComponent } from './styles/styles.component';
import { PanelsComponent } from './panels/panels.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(StylingRoutes),
    ],
    declarations: [
        // pages
        StylesComponent,
        PanelsComponent
    ]
})
export class StylingModule {}
