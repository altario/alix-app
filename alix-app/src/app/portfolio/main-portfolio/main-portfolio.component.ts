import { Component, OnInit } from "@angular/core";
import { MockapiService } from "../../_services/_mockapi.service";

@Component({
    selector: "app-main-portfolio",
    templateUrl: "./main-portfolio.component.html",
    styleUrls: ["./main-portfolio.component.scss"],
    providers: [MockapiService]
})
export class MainPortfolioComponent implements OnInit {
    config: any;

    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON("portfolio/main-portfolio").subscribe(data => {
            console.log(data);
            this.config = data;
        });
    }
}
