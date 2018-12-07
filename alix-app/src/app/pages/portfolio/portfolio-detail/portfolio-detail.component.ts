// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MockapiService } from '../../../services/mockapi.service';
import { Observable } from 'rxjs';
import { map, take, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  public portfolio$: Observable<any>;

  constructor(private apiService: MockapiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.portfolio$ = this.route.params.pipe(mergeMap(params => {
      return this.apiService.getPortfolioPopulated(params.id);
    }));

    this.route.queryParams.pipe(take(1), map(params => {
      console.log(params);
    }));
  }
}
