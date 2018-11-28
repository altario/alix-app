import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-panel-6",
    templateUrl: "./panel-6.component.html",
    styleUrls: ["./panel-6.component.scss"]
})
export class Panel6Component implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {}
}
