// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-row',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationRowComponent implements OnInit {
  @Input() notification: any = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPortfolio(id) {
    this.router.navigate(['monitor/portfolios', id], { queryParams: { type: 'notification'} });
  }
}
