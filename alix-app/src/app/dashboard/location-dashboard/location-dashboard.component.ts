import { Component, OnInit } from "@angular/core";
import { MockapiService } from "../../_services/_mockapi.service";

@Component({
    selector: "app-location-dashboard",
    templateUrl: "./location-dashboard.component.html",
    styleUrls: ["./location-dashboard.component.scss"],
    providers: [MockapiService]
})
export class LocationDashboardComponent implements OnInit {
    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON().subscribe(data => {
            console.log(data);
        });
    }
}
