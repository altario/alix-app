import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-panel-list",
    templateUrl: "./panel-list.component.html",
    styleUrls: ["./panel-list.component.scss"]
})
export class PanelListComponent implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {
        console.log(this.config);
    }
}
