import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-panel-5",
    templateUrl: "./panel-5.component.html",
    styleUrls: ["./panel-5.component.scss"]
})
export class Panel5Component implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {}
}
