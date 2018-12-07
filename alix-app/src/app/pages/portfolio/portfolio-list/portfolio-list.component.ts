// angular
import { Component, OnInit } from '@angular/core';

import { MockapiService } from '../../../services/mockapi.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
  public portfolios$: Observable<any>;

  constructor(private apiService: MockapiService) {
    this.portfolios$ = this.apiService.getPortfoliosPopulated();
  }

  ngOnInit() {}
}
