import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as echarts from 'echarts';
import * as formatUtil from 'echarts/lib/util/format';


@Component({
  selector: 'alix-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss']
})
export class TreemapComponent implements OnInit {

  @Input()
  public series: any = [];

  @Input()
  public opts: any = {};

  @Output()
  public chartInit = new EventEmitter();

  @Output()
  public chartClick = new EventEmitter();

  public options: any = {};

  public initOpts: any = {
    renderer: 'canvas'
  };

  constructor() {

  }

  ngOnInit() {
    const format = formatUtil;

    this.options = {
      series: [{
        name: 'INDUSTRIES BREAKDOWN',
        type: 'treemap',
        visibleMin: 300,
        label: {
          normal: {
            position: 'insideTopLeft',
            formatter: function (params) {
              const arr = [
                '{name|' + params.name + '}',
                '{hr|}',
                '{budget|$ ' + format.addCommas(params.value[0]) + '}'
              ];

            if (params.value[2] != null){
              arr.push(
                '{household| ' + format.addCommas((+params.value[2].toFixed(2)) * 100) + '%}'
              );
            }

              return arr.join('\n');
            },
            rich: {
              budget: {
                fontSize: 22,
                lineHeight: 30,
                color: 'yellow'
              },
              household: {
                fontSize: 14,
                color: '#fff'
              },
              label: {
                fontSize: 9,
                backgroundColor: 'rgba(0,0,0,0.3)',
                color: '#fff',
                borderRadius: 2,
                padding: [2, 4],
                lineHeight: 25,
                align: 'right'
              },
              name: {
                fontSize: 12,
                color: '#fff'
              },
              hr: {
                width: '100%',
                borderColor: 'rgba(255,255,255,0.2)',
                borderWidth: 0.5,
                height: 0,
                lineHeight: 10
              }
            }
          }
        },
        upperLabel: {
          normal: {
            show: true,
            height: 30
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#fff'
          }
        },
        levels: this.getLevelOption(),
        data: this.series
      }]
    };
  }

  onChartInit(e) {
    this.chartInit.emit(e);
  }

  getLevelOption() {
    return [
      {
        itemStyle: {
          normal: {
            borderColor: '#777',
            borderWidth: 0,
            gapWidth: 1
          }
        },
        upperLabel: {
          normal: {
            show: false
          }
        }
      },
      {
        itemStyle: {
          normal: {
            borderColor: '#555',
            borderWidth: 5,
            gapWidth: 1
          },
          emphasis: {
            borderColor: '#ddd'
          }
        }
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          normal: {
            borderWidth: 5,
            gapWidth: 1,
            borderColorSaturation: 0.6
          }
        }
      }
    ];
  }

  onChartClick(chartLine) {
    this.chartClick.emit(chartLine);
  }
}
