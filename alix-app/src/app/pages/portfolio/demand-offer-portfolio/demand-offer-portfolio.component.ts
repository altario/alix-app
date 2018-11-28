import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../../../services/mockapi.service';

@Component({
    selector: 'app-demand-offer-portfolio',
    templateUrl: './demand-offer-portfolio.component.html',
    styleUrls: ['./demand-offer-portfolio.component.scss'],
    providers: [MockapiService]
})
export class DemandAndOfferPortfolioComponent implements OnInit {
    constructor(private api: MockapiService) {}

    ngOnInit() {}
}
