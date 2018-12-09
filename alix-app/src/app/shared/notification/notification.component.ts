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
  @Input() type = 'big';
  @Input() inPortfolio = false;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.notification)
  }

  goToPortfolio(notification: any) {
    this.router.navigate(['monitor/portfolios', notification.portfolioId || 2], {
      queryParams: { type: 'notification', id: notification.id }
    });
  }
}
