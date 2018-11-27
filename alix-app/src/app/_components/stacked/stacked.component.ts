import { Component, OnInit, Input } from '@angular/core';
import { SliderRangeComponent } from "../index";
@Component({
    selector: 'app-stacked',
    templateUrl: './stacked.component.html',
    styleUrls: ['./stacked.component.scss']
})
export class StackedComponent implements OnInit {

    @Input()
    public config: any;

    public options: any = {};

    value:any;

    constructor() { }

    ngOnInit() {
        console.log( this.config )

        this.options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value'
            },
            xAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            series: this.config.right_component.series
        };
    }

    onChangeValue(values){
        console.log(values);
        this.value = values.value + ' - ' + values.highValue;
    }
}
