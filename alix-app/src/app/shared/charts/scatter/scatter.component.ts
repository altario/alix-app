import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'alix-scatter',
    templateUrl: './scatter.component.html',
    styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnInit {
    @Input()
    public series: any = [];

    public options: any = {};

    ngOnInit() { 

        this.options = {
            xAxis: {},
            yAxis: {},
            series: [{
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
                type: 'scatter'
            }]
        };

    }

    constructor() {
    }

}
