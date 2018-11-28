import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-panel-box",
    templateUrl: "./panel-box.component.html",
    styleUrls: ["./panel-box.component.scss"]
})
export class PanelBoxComponent implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {}
}
