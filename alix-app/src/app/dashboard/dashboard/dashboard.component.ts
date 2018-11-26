import { Component, OnInit } from "@angular/core";
import { MockapiService } from "../../_services/_mockapi.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
    providers: [MockapiService]
})
export class DashboardComponent implements OnInit {
    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON().subscribe(data => {
            console.log(data);
        });

        console.log("AND I AM IN HERE JUST O MAKE SURE!!");
    }
}
