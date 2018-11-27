import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-long-panel",
    templateUrl: "./long-panel.component.html",
    styleUrls: ["./long-panel.component.scss"]
})
export class LongPanelComponent implements OnInit {
    @Input() config: any = {};

    constructor() {}

    ngOnInit() {
        console.log(this.config);
    }
}
