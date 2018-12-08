// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MockapiService } from '../../../services/mockapi.service';
import { Observable } from 'rxjs';
import { map, take, mergeMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  public portfolio$: Observable<any>;
  public type$: Observable<any>;
  public notification$: Observable<any>;

  constructor(private apiService: MockapiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.portfolio$ = this.route.params.pipe(
      mergeMap(params => {
        return this.apiService.getPortfolioPopulated(params.id);
      })
    );

    this.type$ = this.route.queryParams.pipe(map(params => params.type));
    this.notification$ = this.route.queryParams.pipe(
      filter(params => !!params.id),
      mergeMap(params => this.apiService.getNotificationPopulated(params.id))
    );
  }
}
