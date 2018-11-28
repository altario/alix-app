import { Component, OnInit, Input } from "@angular/core";
import { SliderRangeComponent } from "../index";
@Component({
    selector: "app-stacked-scatter",
    templateUrl: "./stacked-scatter.component.html",
    styleUrls: ["./stacked-scatter.component.scss"]
})
export class StackedScatterComponent implements OnInit {
    @Input()
    public config: any;

    public options: any = {};

    value: any;

    constructor() {}

    ngOnInit() {
        this.options = {
            xAxis: {},
            yAxis: {},
            series: this.config.right_component.series
        };
    }

    onChangeValue(values) {
        console.log(values);
        this.value = values.value + " - " + values.highValue;
    }
}
