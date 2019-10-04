import { Component, OnInit, Input } from '@angular/core';
// graph color overrides
import { eChartsConfig } from '@global/charts';

@Component({
  selector: 'app-panel-11',
  templateUrl: './panel-11.component.html',
  styleUrls: ['./panel-11.component.scss']
})
export class Panel11Component implements OnInit {
  @Input() public config: any;
  @Input() public title: any;

  public series: any;
  public opts: any;

  constructor() { }

  ngOnInit() {
    this.opts = {
    //   legend: {
    //     data: [
    //       { name: 'New', icon: 'rect' },
    //       { name: 'In Construction', icon: 'rect' },
    //       { name: 'Renovated', icon: 'rect' },
    //       { name: 'Used', icon: 'rect' },
    //       { name: 'Needs Renov.', icon: 'rect' },
    //       { name: 'Ruin', icon: 'rect' }
    //     ],
    //     itemWidth: eChartsConfig.legend.itemWidth,
    //     itemHeight: eChartsConfig.legend.itemHeight,
    //     top: '0',
    //     right: eChartsConfig.legend.right,
    //     textStyle: {
    //       fontSize: eChartsConfig.legend.fontSize,
    //       color: eChartsConfig.legend.color
    //     }
    //   },
      color: ['#00B5E9', '#7AC143', '#C7DA2C', '#F2E603', '#FCB86B','#E9545C']
    };

    this.series = [{
      name: this.title,
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '16',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: this.config.new.value, name: 'New' },
        { value: this.config.inConstruction.value, name: 'In Construction' },
        { value: this.config.renovated.value, name: 'Renovated' },
        { value: this.config.used.value, name: 'Used' },
        { value: this.config.needsRenovation.value, name: 'Needs Renov.' },
        { value: this.config.ruin.value, name: 'Ruin' }
      ]
    }];
  }
}
