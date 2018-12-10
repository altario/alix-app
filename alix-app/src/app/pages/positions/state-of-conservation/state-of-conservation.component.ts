// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';
import * as plotchartdataset from '@data/plotcharts-dataset';
import * as mapLatLng from '@data/map-dataset';

// graph color overrides
import { eChartsConfig } from '@global/charts';
import { mapStyle } from '@global/map';
import { dataComparison } from '@app/data/data-comparison';

@Component({
  selector: 'app-state-of-conservation',
  templateUrl: './state-of-conservation.component.html',
  styleUrls: ['./state-of-conservation.component.scss']
})

export class StateOfConservationComponent implements OnInit {
  public config: any;
  public selectedStateOfConservationToday: object;
  public selectedStateOfConservationPSM: object;
  public selectedSOCAllAssetsValues: Array<any>;
  public selectedSOCAllAssets: object;
  public imageTransitionValue = '2018';
  public imageTransitionObject = {
    '2015': ['./assets/images/differencePerYear/street-left2.jpg', './assets/images/differencePerYear/street-right2.jpg'],
    '2018': ['./assets/images/differencePerYear/street-left1.jpg', './assets/images/differencePerYear/street-right1.jpg']
  }; // #HC

  public numbOfAssetsBySc;
  public priceEvolutionBySc;

  public opts: any = {};
  public chartInstance: any = {};

  lat = 45.4758422;
  lng = 9.1911364;
  zoom = 16;
  zoom2 = 14;
  radius = 8;

  // tslint:disable-next-line:max-line-length
  marketsLat = mapLatLng.MapLatLng.lat;

  // tslint:disable-next-line:max-line-length
  marketsLng = mapLatLng.MapLatLng.lng;

  colors = mapLatLng.MapLatLng.colors;

  markers: any;
  style1 = mapStyle;
  style2 = mapStyle;
  markers2: any[];
  dots: any[];
  dotimage: any;
  showImage: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      this.config = dataset.dossiersMainData.dossier1.stateOfConservation;

      this.selectedStateOfConservationToday = this.config.stateOfConservationToday.populations.population1;
      this.selectedStateOfConservationPSM = this.config.stateOfConservationPricePerSqm.populations.population1;
      this.selectedSOCAllAssetsValues = this.initLastStateOfConservationAllAssets();
      this.selectedSOCAllAssets = this.config.panelFromMapStateOfConservationBreakdownAllAssets.years[this.selectedSOCAllAssetsValues[0]];
      this.numbOfAssetsBySc = this.getnumbOfAssetsBySc();
      this.priceEvolutionBySc = this.getpriceEvolutionBySc();

      this.markers = this.getMarkers();
      this.dots = this.generateDots();
    });
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getMarkers() {
    const markers = [];
    const counts = { 'blue': 16, 'green': 3, 'lightgreen': 52, 'yellow': 23, 'orange': 6, 'red': 1 };
    this.marketsLat = this.shuffle(this.marketsLat);
    this.marketsLng = this.shuffle(this.marketsLng);

    Object.keys(counts).map((color) => {
      const length = counts[color] * 5;
      for (let i = 0; i < length; i++) {
        markers.push({ lat: parseFloat(this.marketsLat.shift()), lng: this.marketsLng.shift(), color: this.colors[color] });
      }
    });

    return markers;
  }

  getMarkers2() {
    const markers = [];
    const counts = { 'green': 5 };
    this.marketsLat = this.shuffle(this.marketsLat);
    this.marketsLng = this.shuffle(this.marketsLng);

    Object.keys(counts).map((color) => {
      const length = counts[color] * 5;
      for (let i = 0; i < length; i++) {
        markers.push({ lat: parseFloat(this.marketsLat.shift()), lng: this.marketsLng.shift(), color: this.colors[color] });
      }
    });

    return markers;
  }

  getSCTodayPopulationNames(): Array<any> {
    return Object.keys(this.config.stateOfConservationToday.populations).map((population, i) => {
      return { id: i, key: population, value: this.config.stateOfConservationToday.populations[population].populationName.value };
    });
  }

  changeSCTodayValue(callbackEvent): void {
    this.selectedStateOfConservationToday = this.config.stateOfConservationToday.populations[callbackEvent];
    this.updateNumbOfAssetsBySc(callbackEvent);
  }

  changeSCPpsmValue(callbackEvent): void {
    this.selectedStateOfConservationPSM = this.config.stateOfConservationPricePerSqm.populations[callbackEvent];
    this.updatePriceEvolutionBySc(callbackEvent);
  }

  changeSOCAllAssetsValue(callbackEvent): void {
    this.selectedSOCAllAssets = this.config.panelFromMapStateOfConservationBreakdownAllAssets.years[callbackEvent.value];
  }

  changeImageTransition(callbackEvent): void {
    this.imageTransitionValue = callbackEvent.value;
  }

  initLastStateOfConservationAllAssets(): Array<any> {
    // Just incase... This is to get the last object of the years object. [0]
    // &&
    // the array of years to populte the slider [1]
    return [
      Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years)[
      Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years).length - 1
      ],
      Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years)
    ];
  }

  getnumbOfAssetsBySc(population = 'population1'): Array<any> {
    const lineColors = ['#00B5E9', '#7AC143', '#C7DA2C', '#F2E603', '#FCB86B', '#E9545C'];
    const popSelected = chartdataset.dossier1ChartsData.stateOfConservation.numbOfAssetsBySc.filter(line => line.population === population);

    this.opts.numbOfAssetsBySc = {
      title: {
        text: '# BY STATE OF CONSERVATION', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: popSelected.map(line => ({ name: line.stateOfConservation, icon: 'rect' })),
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: eChartsConfig.legend.top,
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      grid: eChartsConfig.grid,
      xAxis: {
        type: 'category',
        data: [2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: eChartsConfig.yAxis.axisLabel,
        axisLine: {
          show: false
        }
      }
    };

    const series = popSelected.map((line: any, i) => ({
      name: line.stateOfConservation,
      data: line.values,
      type: 'line',
      showSymbol: true,
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[i] },
      itemStyle: { color: lineColors[i] }
    }));

    return series;
  }

  updateNumbOfAssetsBySc(population) {
    this.chartInstance.numbOfAssetsBySc.setOption({
      series: this.getnumbOfAssetsBySc(population)
    });
  }

  getpriceEvolutionBySc(population = 'population1'): Array<any> {
    const lineColors = ['#00B5E9', '#7AC143', '#C7DA2C', '#F2E603', '#FCB86B', '#E9545C'];
    const popSelected = chartdataset.dossier1ChartsData.stateOfConservation.priceEvolutionBySc
      .filter(line => line.population === population);

    const axisYLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisYLabel.formatter = '{value} €';

    this.opts.priceEvolutionBySc = {
      title: {
        text: 'PRICE EVOLUTION BY STATE OF CONSERVATION', // #HC
        top: '17px',
        left: '16px',
        textStyle: eChartsConfig.title,
      },
      legend: {
        data: popSelected.map(line => ({ name: line.stateOfConservation, icon: 'rect' })),
        itemWidth: eChartsConfig.legend.itemWidth,
        itemHeight: eChartsConfig.legend.itemHeight,
        top: '55px',
        right: eChartsConfig.legend.right,
        textStyle: {
          fontSize: eChartsConfig.legend.fontSize,
          color: eChartsConfig.legend.color
        }
      },
      grid: eChartsConfig.grid,
      xAxis: {
        type: 'category',
        data: [2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: axisYLabel,
        axisLine: {
          show: false
        }
      }
    };

    const series = popSelected.map((line: any, i) => ({
      name: line.stateOfConservation,
      data: line.values,
      type: 'line',
      showSymbol: true,
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[i], type: 'solid' },
      itemStyle: { color: lineColors[i] }
    }));

    series.push({
      name: dataComparison.priceEvolutionBySc.name,
      data: dataComparison.priceEvolutionBySc.values,
      type: 'line',
      showSymbol: false,
      symbol: 'none',
      symbolSize: 0,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: '#FF0000', type: 'dotted' },
      itemStyle: { color: '#FF0000' }
    });

    return series;
  }

  updatePriceEvolutionBySc(population) {
    this.chartInstance.priceEvolutionBySc.setOption({
      series: this.getpriceEvolutionBySc(population)
    });
  }

  getscpPriceEvo(population = 'population1'): Array<any> {
    const labels = ['New', 'In Construction', 'Renovated', 'Used', 'Needs Renovation', 'Ruin'];
    const axisLabel = JSON.parse(JSON.stringify(eChartsConfig.xAxis.axisLabel));
    axisLabel.formatter = function (value, index) {
      return index === 0 ? 0 : labels[index - 1];
    };

    const axisYLabel = JSON.parse(JSON.stringify(eChartsConfig.yAxis.axisLabel));
    axisYLabel.formatter = '{value} €';

    this.opts.scpPriceEvo = {
      grid: {
        left: 100,
        right: eChartsConfig.grid.right
      },
      xAxis: {
        type: 'value',
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: axisYLabel,
        axisLine: eChartsConfig.yAxis.axisLine
      }
    };

    const series = plotchartdataset.dossier1PlotChartsData.stateOfConservation.scpPriceEvo.filter((line) => {
      if (line.population === population) {
        return line;
      }
    });

    const x = series.map((line) => line.values).shift();

    x.push({
      type: 'effectScatter',
      color: '#E9545C',
      symbolSize: 5,
      data: [dataComparison.sqmPricePerStateOfConservationBarPlot.values]
    });

    return x;
  }

  onChartInit(chart, e) {
    this.chartInstance[chart] = e;
  }

  generateDots() {
    const bubbleSize = 10;
    const divMargin = 20;

    const dotsColors = [
        '#7AC143',
    ];

    const dots = [];
    const imgs = [
      'img_map_01.jpg',
      'img_map_02.jpg',
      'img_map_03.jpg',
      'img_map_04.jpg',
      'img_map_05.jpg',
      'img_map_06.jpg',
      'img_map_07.jpg',
      'img_map_08.jpg',
      'img_map_09.jpg',
      'img_map_10.jpg',
      'img_map_11.jpg',
      'img_map_12.jpg'
    ];

    for (let i = 0; i < 12; i++) {
      dots.push({
        lat: Math.floor(Math.random() * 85) + 15,
        lng: Math.floor(Math.random() * 85) + 15,
        img: '/assets/images/soc_map/' + imgs.shift(),
        color: '#7AC143'
      });
    }

    return dots;
  }

  onShowLightbox( evt, dot ): void {

    if(evt) {
      evt.stopPropagation();
    }


    this.dotimage = JSON.parse(JSON.stringify(dot));
    this.dotimage.lat+= 3;
    this.dotimage.lng-= 5;
    this.showImage = true;
  }
  hideLightbox(){
    this.showImage = false;
  }
}

