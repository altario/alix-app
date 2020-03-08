// angular
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-npl-portfolio-detail',
  templateUrl: './npl-portfolio-detail.component.html',
  styleUrls: ['./npl-portfolio-detail.component.scss']
})
export class NplPortfolioDetailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigateByUrl('/monitor/npl/portfolio');
  }
}
