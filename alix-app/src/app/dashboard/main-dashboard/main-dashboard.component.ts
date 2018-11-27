import { Component, OnInit } from "@angular/core";
import { MockapiService } from "../../_services/_mockapi.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./main-dashboard.component.html",
    styleUrls: ["./main-dashboard.component.scss"],
    providers: [MockapiService]
})
export class MainDashboardComponent implements OnInit {
    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON().subscribe(data => {
            console.log(data);
        });
    }
}
