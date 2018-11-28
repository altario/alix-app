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
            series: [
                {
                    symbolSize: 20,
                    data: [
                        [10.0, 8.04],
                        [8.0, 6.95],
                        [13.0, 7.58],
                        [9.0, 8.81],
                        [11.0, 8.33],
                        [14.0, 9.96],
                        [6.0, 7.24],
                        [4.0, 4.26],
                        [12.0, 10.84],
                        [7.0, 4.82],
                        [5.0, 5.68]
                    ],
                    type: "scatter"
                }
            ]
        };
    }

    onChangeValue(values) {
        console.log(values);
        this.value = values.value + " - " + values.highValue;
    }
}
