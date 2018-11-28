import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../../../_services/_mockapi.service';

@Component({
    selector: 'app-financial',
    templateUrl: './financial.component.html',
    styleUrls: ['./financial.component.scss'],
    providers: [MockapiService]
})
export class FinancialComponent implements OnInit {
    config: any;

    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON('portfolio/financial').subscribe(data => {
            console.log(data);
            this.config = data;
        });
    }
}
