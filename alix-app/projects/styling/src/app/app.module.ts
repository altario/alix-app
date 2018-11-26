// angular
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// prism
import { ApPrismModule } from '@angular-package/prism'

// routing
import { AppRoutingModule } from './app-routing.module'

// plugins
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'

// app
import { AppComponent } from './app.component'

// ngx
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { ModalModule } from 'ngx-bootstrap/modal'
import { AlertModule } from 'ngx-bootstrap/alert'
import { PopoverModule } from 'ngx-bootstrap/popover'
// import { NgSelectModule } from '@ng-select/ng-select'
// import { Daterangepicker } from 'ng2-daterangepicker'
import { TagInputModule } from 'ngx-chips'
import { AccordionModule } from 'ngx-bootstrap/accordion'
// import { StarRatingModule } from 'angular-star-rating'

// components --------------------

// components: colors
import { ColorsComponent } from './components/colors/colors.component'

// components: typography
import { TypographyComponent } from './components/typography/typography.component'

// components: buttons
import { ButtonsComponent } from './components/buttons/buttons.component'

// components: forms
import { FieldsComponent } from './components/forms/fields/fields.component'
// import { NgxSelectComponent } from './components/forms/ngx-select/ngx-select.component'
// import { Ng2DaterangepickerComponent } from './components/forms/ng2-daterangepicker/ng2-daterangepicker.component'
import { NgxSearchComponent } from './components/forms/ngx-search/ngx-search.component'
import { FormsTextareaComponent } from './components/forms/forms-textarea/forms-textarea.component'
import { FormsCheckboxRadioToggleComponent } from './components/forms/forms-checkbox-radio-toggle/forms-checkbox-radio-toggle.component'
import { NgxChipsComponent } from './components/forms/ngx-chips/ngx-chips.component'

// components: grid
import { GridComponent } from './components/grid/grid.component'

// components: modals
import { ModalsComponent } from './components/modals/modals.component'

// components: nav
import { NavComponent } from './components/nav/nav.component'

// components: sidebar
import { SidebarComponent } from './components/sidebar/sidebar.component'

// components: notifications
import { NotificationsComponent } from './components/notifications/notifications.component'

// page-components: footer
import { FooterComponent } from './components/footer/footer.component'

// page-components --------------------

// page-components: job
// import { JobComponent } from './page-components/job/job.component'

// page-components: avatar
// import { AvatarComponent } from './page-components/avatar/avatar.component'

// page-components: panels
import { PanelsComponent } from './components/panels/panels.component'

// components: accordion
import { AccordionComponent } from './components/accordion/accordion.component'

// components: filters
import { FiltersComponent } from './components/filters/filters.component'

@NgModule({
  declarations: [
    // app
    AppComponent,

    // page-components --------------------

    // page-components: job
    // JobComponent,

    // page-components: avatar
    // AvatarComponent,

    // layout --------------------

    // layout: modal
    ModalsComponent,

    // layout: nav
    NavComponent,

    // layout: sidebar
    SidebarComponent,

    // layout: panels
    PanelsComponent,

    // layout: accordion
    AccordionComponent,

    // layout: footer
    FooterComponent,

    // layout: filters
    FiltersComponent,

    // components --------------------

    // components: colors
    ColorsComponent,

    // components: typography
    TypographyComponent,

    // components: buttons
    ButtonsComponent,

    // components: forms
    FieldsComponent,
    // NgxSelectComponent,
    // Ng2DaterangepickerComponent,
    NgxSearchComponent,
    FormsTextareaComponent,
    FormsCheckboxRadioToggleComponent,

    // components: grid
    GridComponent,

    // notifications
    NotificationsComponent,

    // ngx-chips
    NgxChipsComponent,

    // accordion
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule,
    ScrollToModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    // StarRatingModule.forRoot(),
    TagInputModule,
    // NgSelectModule,
    // Daterangepicker,
    ApPrismModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
