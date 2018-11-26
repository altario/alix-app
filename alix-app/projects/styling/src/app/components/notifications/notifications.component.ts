// angular
import { Component, TemplateRef, OnInit, AfterViewInit } from '@angular/core'

// ngx-bootstrap
import { AlertModule } from 'ngx-bootstrap/alert'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications = `
<div class="alert-holder">
  <alert type="info" [dismissible]="dismissible">
    <div class="alert-body">
      <strong>Well done!</strong> You successfully read this important alert message.
    </div>
    <div class="alert-button">
      <button class="btn btn-outline-primary btn-tiny" type="button">Rate now</button>
    </div>
  </alert>

  <alert type="info" [dismissible]="dismissible">
    <div class="alert-body">
      <strong>Well done!</strong> You successfully read this important alert message.
    </div>
  </alert>

  <alert type="warning" [dismissible]="dismissible">
    <div class="alert-body">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
    <div class="alert-button">
      <button class="btn btn-outline-primary btn-tiny" type="button">Rate now</button>
    </div>
  </alert>

  <alert type="danger" [dismissible]="dismissible">
    <div class="alert-body">
      <div class="title">job Creation failed!</div>
      The Job creation failed because the filleds were not submited correctly. Please verify the fileds higlighted in red and try again. Thank you.
    </div>
  </alert>
</div>
  `

  dismissible = true
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'warning',
      msg: `Warning! Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod. Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod. Lorem ipsum dolor sit amet, consectetur sed do eiusmod.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ]
  alerts = this.defaultAlerts

  constructor() {}

  ngOnInit() {}

  reset(): void {
    this.alerts = this.defaultAlerts
  }
}
