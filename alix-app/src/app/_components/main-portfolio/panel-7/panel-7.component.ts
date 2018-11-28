import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-panel-7",
    templateUrl: "./panel-7.component.html",
    styleUrls: ["./panel-7.component.scss"]
})
export class Panel7Component implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {}
}
