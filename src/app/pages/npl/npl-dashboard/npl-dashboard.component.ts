// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-npl-dashboard',
  templateUrl: './npl-dashboard.component.html',
  styleUrls: ['./npl-dashboard.component.scss']
})
export class NplDashboardComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}

  goToNplPortfolio() {
    this.router.navigateByUrl('/monitor/npl/portfolio');
  }
}
