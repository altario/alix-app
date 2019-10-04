// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MonitorListsService } from '../../../services/monitorLists.service';
import { Observable } from 'rxjs';
import { map, tap, mergeMap, filter } from 'rxjs/operators';
import { eChartsConfig } from '@app/global/charts';
import * as dashboardMapDataset from '@data/dashboard/map-dashboard-dataset';
// maps
import { mapStyle } from '@global/map';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-pno-detail',
  templateUrl: './pno-detail.component.html',
  styleUrls: ['./pno-detail.component.scss']
})
export class PnoDetailComponent implements OnInit {
  public pno$: Observable<any>;
  public type$: Observable<any>;
  public notification$: Observable<any>;
  public chart: any;

  lat = 41.87194;
  lng = 12.56738;
  zoom = 5;
  mapStyle = mapStyle;

  mapDataset = dashboardMapDataset.dashMap;
  dots = [];


  constructor(private apiService: MonitorListsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dots = this.dotSizeRandom();

  }

  dotSizeRandom() {
    return this.mapDataset.populations.Industry1.allIndustries.map((row) => {
      // tslint:disable-next-line:max-line-length
      return { lat: row.value[0], lng: row.value[1], radius: Math.floor(Math.random() * ((!isNullOrUndefined(row.value[2]) ? row.value[2] : 9000) - 2000 + 1) + 2000) };
    });
  }

  pnoTicketSize() {
    const config = {
      rotate: 90,
      align: 'left',
      verticalAlign: 'middle',
      position: 'insideBottom',
      distance: 15,
    };

    const labelOption = {
      normal: {
        show: true,
        position: config.position,
        distance: config.distance,
        align: config.align,
        verticalAlign: config.verticalAlign,
        rotate: config.rotate,
        formatter: '{c} %',
        fontSize: 16,
        rich: {
          name: {
            textBorderColor: '#fff'
          }
        }
      }
    };

    return {
      barGap: 0,
      type: 'bar',
      label: labelOption,
      data: [7.02,
        16.11,
        17.43,
        37.54,
        21.90]
    };

  }

  positionList = () => {
    return [
      ['Rowe - Osinski', 'Mortgage PAD6852', '6.52%', '23,808K€',	'1,672K€',	'6.39%', '8y'],
      ['Prospero Toscano', 'Mortgage DCR1194',	'6.69%', '489K€',	'200K€',	'6.57%', '9y'],
      ['Bertoldo Giordano', 'Mortgage DCR3145',	'9.42%', '1,300K€',	'734K€',	'9.60%', '14y'],
      ['Generoso Folliero', 'Mortgage DCR8257',	'6.34%', '628K€',	'465K€',	'9.22%', '13y'],
      ['Valerio Sagese', 'Mortgage DCR883',	'8.55%', '793K€',	'568K€',	'6.24%', '11y'],
      ['Abelardo Marino', 'Mortgage DCR8080',	'9.49%', '1,12K€',	'665K€',	'8.55%', '11y'],
      ['Selene Calabresi', 'Mortgage DCR9779',	'9.74% ', '1,026K€',	'516K€',	'8.97%', '12y'],
      ['Eliano Piazza', 'Mortgage DCR4170', '7.95%', '1,093K€',	'940K€',	'7.40%', '14y'],
      ['Federica Padovesi', 'Mortgage DCR1037',	'6.15%', '1,151K€',	'722K€',	'8.12%', '13y'],
      ['Lisandro Lucciano', 'Mortgage DCR6815',	'9.59%', '1,062K€',	'554K€',	'5.22%', '9y'],
      ['Fabiano Piccio', 'Mortgage DCR9891',	'8.46%', '245K€',	'159K€',	'9.67%', '13y'],
      ['Filiberto De Luca', 'Mortgage DCR868',	'8.33%', '842K€',	'703K€',	'9.39%', '20y'],
      ['Licia Boni', 'Mortgage DCR2978',	'7.95%', '946K€	', '320K€',	'5.16%', '5y'],
      ['Gianleone Zito', 'Mortgage DCR8568',	'8.12%', '481K€',	'292K€',	'7.36%', '13y'],
      ['Anastasia Capon', 'Mortgage DCR2283',	'9.36%', '1,337K€',	'514K€',	'9.76%', '7y'],
      ['Assunta Ferrari', 'Mortgage DCR4327',	'9.05%', '1,191K€',	'732K€',	'5.32%', '10y'],
      ['Ilaria Giordano', 'Mortgage DCR233',	'6.39%', '528K€',	'329K€',	'5.88%', '14y'],
      ['Simone Colombo', 'Mortgage DCR3898',	'8.08%', '1,119K€',	'809K€',	'7.63%', '17y'],
      ['Vladimiro Cremonesi', 'Mortgage DCR6047',	'6.93%', '998K€',	'203K€',	'5.98%', '3y'],
      ['Crispina Costa', 'Mortgage DCR887',	'6.23%', '1,221K€',	'487K€',	'9.72%', '9y'],
      ['Nicla Udinesi', 'Mortgage DCR4594',	'8.56%', '1,190K€',	'754K€',	'9.39%', '10y'],
      ['Virginia Moretti', 'Mortgage DCR467',	'7.90%', '769K€',	'381K€',	'8.92%', '11y'],
      ['Iacopo Davide', 'Mortgage DCR1325',	'8.25%', '564K€',	'487K€',	'5.26%', '16y'],
      ['Sandro Angelo', 'Mortgage DCR3587',	'7.49%', '918K€',	'429K€',	'8.50%', '10y'],
      ['Terzo Trevisani', 'Mortgage DCR941',	'7.12%', '976K€',	'834K€',	'6.82%', '20y']
    ];
  }

  pnoTicketSizeOpts() {

    return {
      title: {
        text: 'PNO by Ticket Size', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title
      },
      color: ['#003366', '#006699', '#4cabce', '#e5323e'],
      calculable: true,
      legend: {
        show: false,
        align: 'left'
      },
      xAxis: {
        type: 'category',
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine,
        axisTick: { show: false },
        data: [
          '<1 Mln EUR',
          '1 to 5 Mln EUR',
          '5 to 20 Mln EUR',
          '20 to 50 Mln EUR',
          '> 50 Mln EUR'
        ]
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: eChartsConfig.yAxis.axisLabel
      }
    };
  }
}
