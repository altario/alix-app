import { Component, OnInit } from "@angular/core";
import { MockapiService } from "../../_services/_mockapi.service";

@Component({
    selector: "app-location-portfolio",
    templateUrl: "./location-portfolio.component.html",
    styleUrls: ["./location-portfolio.component.scss"],
    providers: [MockapiService]
})
export class LocationPortfolioComponent implements OnInit {
    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON().subscribe(data => {
            console.log(data);
        });
    }
}
