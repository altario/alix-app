import { Component, OnInit } from "@angular/core";
import { MockapiService } from "../../_services/_mockapi.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./demand-offer-dashboard.component.html",
    styleUrls: ["./demand-offer-dashboard.component.scss"],
    providers: [MockapiService]
})
export class DemandAndOfferDashboardComponent implements OnInit {
    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON().subscribe(data => {
            console.log(data);
        });
    }
}
