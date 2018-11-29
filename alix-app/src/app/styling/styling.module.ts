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

// pipes
import {
  CustomCurrencyPipe,
  CustomPercentagePipe,
  CustomDateConverterPipe
} from '@helpers/index';

// panels
import {
    Panel1Component,
    Panel2Component,
    Panel3Component,
    Panel4Component,
    Panel5Component,
    Panel6Component,
    Panel7Component,
    Panel8Component
} from '@shared/panels/index';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(StylingRoutes),
    ],
    declarations: [
        // pages
        StylesComponent,
        PanelsComponent,

        // pipes
        CustomCurrencyPipe,
        CustomPercentagePipe,
        CustomDateConverterPipe,

        // panels
        Panel1Component,
        Panel2Component,
        Panel3Component,
        Panel4Component,
        Panel5Component,
        Panel6Component,
        Panel7Component,
        Panel8Component
    ]
})
export class StylingModule {}
