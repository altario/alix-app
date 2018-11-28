import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-panel-1",
    templateUrl: "./panel-1.component.html",
    styleUrls: ["./panel-1.component.scss"]
})
export class Panel1Component implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {}
}
