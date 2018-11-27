import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-panel-list-row",
    templateUrl: "./panel-list-row.component.html",
    styleUrls: ["./panel-list-row.component.scss"]
})
export class PanelListRowComponent implements OnInit {
    @Input() config: any = {};

    constructor() {}

    ngOnInit() {
        console.log(this.config);
    }
}
