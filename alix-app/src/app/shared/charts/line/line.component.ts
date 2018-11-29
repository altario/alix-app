import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alix-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
    @Input()
    public series: any = [];

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
        series: [{
          name: 'Linha 1',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }, {
          name: 'Linha 2',
          data: [33, 5464, 901, 456, 445, 335, 2342 ],
          type: 'line'
        }]
      };

    this.initOpts = {
      renderer: 'svg',
    };
  }

}
