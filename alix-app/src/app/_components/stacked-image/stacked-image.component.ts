import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-stacked-image",
    templateUrl: "./stacked-image.component.html",
    styleUrls: ["./stacked-image.component.scss"]
})
export class StackedImageComponent implements OnInit {
    @Input()
    public config: any;

    public options: any = {};

    value: any;

    constructor() {}

    ngOnInit() {}
}
