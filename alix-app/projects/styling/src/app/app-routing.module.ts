// angular
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

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
// import { Ng2DaterangepickerComponent } from './components/forms/ng2-daterangepicker/ng2-daterangepicker.component';
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

// page-components: panels
import { PanelsComponent } from './components/panels/panels.component'

// components: accordion
import { AccordionComponent } from './components/accordion/accordion.component'

// components: filters
import { FiltersComponent } from './components/filters/filters.component'

// routes
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'colors' },
  // { path: '**', redirectTo: 'colors', pathMatch: 'full' },

  // components --------------------

  // components: colors
  { path: 'colors', component: ColorsComponent },

  // components: typography
  { path: 'typography', component: TypographyComponent },

  // components: typography
  { path: 'buttons', component: ButtonsComponent },

  // components: forms
  { path: 'forms', component: FieldsComponent },
  // { path: 'ngx-select', component: NgxSelectComponent },
  // { path: 'ng2-daterangepicker', component: Ng2DaterangepickerComponent },
  { path: 'ngx-search', component: NgxSearchComponent },
  { path: 'forms-textarea', component: FormsTextareaComponent },
  { path: 'forms-checkbox-radio-toggle', component: FormsCheckboxRadioToggleComponent },
  { path: 'ngx-chips', component: NgxChipsComponent },

  // components: grid
  { path: 'grid', component: GridComponent },

  // components: notifications
  { path: 'notifications', component: NotificationsComponent },

  // components: modals
  { path: 'modals', component: ModalsComponent },

  // components: nav
  { path: 'nav', component: NavComponent },

  // components: sidebar
  { path: 'sidebar', component: SidebarComponent },

  // components: panels
  { path: 'panels', component: PanelsComponent },

  // components: accordion
  { path: 'accordion', component: AccordionComponent },

  // components: footer
  { path: 'footer', component: FooterComponent },

  // components: filters
  { path: 'filters', component: FiltersComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true,
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
