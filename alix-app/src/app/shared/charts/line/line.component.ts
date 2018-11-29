import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alix-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
    @Input()
    public series: any = [];

    @Input()
    public opts: any = {};

  public options: any = {};
  public initOpts: any = {};

  constructor() { }

  ngOnInit() {
      this.options = {
        title: {
          text: 'Market Value -VS- Replacement Cost'
        },
        legend: {
          data: ['Linha 1', 'Linha 2']
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: this.series
    };

    this.options = Object.assign(this.opts, this.options);

    this.initOpts = {
      renderer: 'svg',
    };
  }

}
