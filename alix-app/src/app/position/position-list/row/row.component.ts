import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "position-list-row",
    templateUrl: "./row.component.html",
    styleUrls: ["./row.component.scss"]
})
export class RowComponent implements OnInit {
    @Input() company: Object = {};

    constructor(private router: Router) {}

    ngOnInit() {}

    goToDashboard(id) {
        this.router.navigate(["/dashboard", id]);
    }
}
