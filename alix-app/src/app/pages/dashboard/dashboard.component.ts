import { Component, OnInit, Output } from '@angular/core';
import * as echarts from 'echarts';

// dataset
import * as dashboardDataset from '@data/dashboard-dataset';
import { EventEmitter } from 'events';
import * as dashboardMapDataset from '@data/map-dashboard-dataset';

// graph color overrides
import * as eChartsConfig from '@global/charts';
import { mapStyle } from '@global/map';

//Pipe
import { CustomCurrencyPipe } from '@helpers/index';
import { ShufflePipe } from 'ngx-pipes';
import { numericalValues } from '@helpers/numerical-values.lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [CustomCurrencyPipe, ShufflePipe]
})
export class DashboardComponent implements OnInit {

  opts: any;

  public config: any;
  public kpis: any;
  public chartInstance: any = {};
  public series: any = {};
  public droplist: any = [];
  public dropvalue: any;

  public mockIndustryIds = {
    allIndustries: 27,
    consumerGoods: 16,
    automotiveIndustrials: 17,
    transportation: 18,
    telecomMediaAndTechnology: 19,
    energyAndBasicMaterials: 20,
    infrastructureRealEstate: 26,
    financialInstitutions: 21,
    publicFinance: 22,
    healthcarePharma: 23,
    retailAndLuxury: 24,
    hospitality: 25
  };


    lat = 41.87194;
    lng = 12.56738;
    zoom = 5.5;
    mapStyle = mapStyle;

    mapDataset = dashboardMapDataset.dashMap;

    constructor(private currencyPipe: CustomCurrencyPipe, private shufflePipe: ShufflePipe) {

        this.config = dashboardDataset;
        this.kpis = this.config.dashboard1.mainKpis[0].allIndustries;
    }

  ngOnInit() {
    const axisLabel = JSON.parse(JSON.stringify(eChartsConfig.eChartsConfig.xAxis.axisLabel));
    axisLabel.formatter = function (value, index) {
        const processedValue = numericalValues(value);
        return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
    };

    this.opts = {
      color: ['#003366', '#006699', '#4cabce', '#e5323e'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (params) => {
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + '<br />';
          });

          return rez;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        top: '20px',
        textStyle: {
          color: '#fff'
        },
        data: ['Bad Loan', 'Unlikely to Pay', 'Past Due Loan', 'Performing']
      },

      xAxis: {
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: axisLabel,
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'category',
        splitLine: eChartsConfig.eChartsConfig.yAxis.splitLine,
        axisLabel: eChartsConfig.eChartsConfig.yAxis.axisLabel,
        axisLine: eChartsConfig.eChartsConfig.yAxis.axisLine,
        data: ['AAA', 'AA+', 'AA', 'AA-', 'A+', 'A', 'A-', 'BBB+', 'BBB', 'BBB-', 'BB+', 'BB'].reverse()
      }
    };

    this.droplist = [{ name: 'All Industries', id: 'allIndustries' }, { name: 'Consumer Goods', id: 'consumerGoods' }, { name: 'Automotive & Industrials', id: 'automotiveIndustrials' }, { name: 'Transportation', id: 'transportation' }, { name: 'Telecom, Media and Technology', id: 'telecomMediaAndTechnology' }, { name: 'Energy and Basic Materials', id: 'energyAndBasicMaterials' }, { name: 'Infrastructure & Real Estate', id: 'infrastructureRealEstate' }, { name: 'Financial Institutions', id: 'financialInstitutions' }, { name: 'Public Finance', id: 'publicFinance' }, { name: 'Healthcare & Pharma', id: 'healthcarePharma' }, { name: 'Retail and Luxury', id: 'retailAndLuxury' }, { name: 'Hospitality', id: 'hospitality' }];

  }

  private convertToMilion(value) {
    return (parseInt(value, 10) / 1000000);
  }

  dotSizeRandom( ){
      return Math.floor(Math.random() * (52000 - 2000 + 1) + 2000);
  }

  getexposurePerformanceBoxPlot(population = 'allIndustries'): Array<any> {
    const labels = ['Performing', 'Past Due Loans', 'Unlikely to Pay', 'Bad Loans'];
    const axisLabel = JSON.parse(JSON.stringify(eChartsConfig.eChartsConfig.xAxis.axisLabel));
    axisLabel.formatter =  (value, index) => {
      return index == 0 ? 0 : labels[index - 1];
    };

    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.eChartsConfig.yAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
    };


    this.opts.exposurePerformanceBoxPlot = {
      grid: {
        left: 100
      },
      xAxis: {
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: axisLabel,
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        splitLine: eChartsConfig.eChartsConfig.yAxis.splitLine,
        axisLabel: axisyLabel,
        axisLine: eChartsConfig.eChartsConfig.yAxis.axisLine
      }
    };

    const kpis = this.config.dashboard1.exposurePerformanceBoxPlot.filter((line, i) => {
      if (line.industry === population) {
        return true;
      }
    });

    const series = kpis.shift().series;
    return series;
  }

  getratingPerformance(population = 'allIndustries'): Array<any> {

    const kpis = this.config.dashboard1.ratingPerformance.filter((line, i) => {
      if (line.industry === population) {
        return true;
      }
    });

    const series = kpis.shift().series;
    return series;
  }

  getutpOutflowInflow(industry = 'allIndustries'): Array<any> {
    const labels = ['Exposure 1Y Ago', 'To Performing', 'Collected', 'To Bad Loans', 'From Performing', 'From Non Performing', 'Others'];

    const axisLabel = JSON.parse(JSON.stringify(eChartsConfig.eChartsConfig.xAxis.axisLabel));
    axisLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
    };

    this.opts.utpOutflowInflow = {
      title: {
        text: 'UTP Exposure',
        subtext: 'UTP Exposure 1 Year Inflow & Outflow',
        padding: 20,
        textStyle: {
          color: '#fff'
        }
        // sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
      },
      grid: {
        top: 100,
        left: 100
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (params) => {
          let tar;
          if (params[1].value !== '-') {
            tar = params[1];
          } else {
            tar = params[2];
          }
          // return labels[tar.dataIndex] + '<br/>' +
          //        tar.seriesName + ': ' + parseInt(tar.value / 1000000) + 'Mln';
          const processedValue = numericalValues(tar.value);
          return labels[tar.dataIndex] + '<br/>' + tar.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
        }
      },
      legend: {
        data: ['Increase', 'Decrease'],
        top: '10px',
        right: '20px',
        textStyle: {
          color: '#fff'
        },
      },
      xAxis: [
        {
          type: 'category',
          axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
          splitLine: {
            show: false,
            lineStyle: eChartsConfig.eChartsConfig.xAxis.splitLine.lineStyle,
          },
          data: function () {
            const list = [];
            for (let i = 1; i <= 8; i++) {
              list.push(i);
            }
            return list;
          }(),
          axisLabel: {
            show: false,
            color: eChartsConfig.eChartsConfig.xAxis.axisLabel.color,
            formatter: function (x, y) {
              return labels[x - 1];
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
          splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
          axisLabel: axisLabel
        }
      ],
    };

    const series = JSON.parse(JSON.stringify(this.config.dashboard1.utpOutflowInflow));
    if (industry == 'allIndustries' ) {

      return series.map((serie) => {
        serie.data = serie.data[0];
        if (serie.id == 'alpha'){
          return serie;
        }

        serie.itemStyle = {
          normal: {
            label: {
              show: true,
                position: serie.itemStyle.normal.label.position,
                formatter: function (params) {
                  const processedValue = numericalValues(params.value);
                  return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
                }
            }
          }
        };
        return serie;
      });
    }

    return series.map((serie) => {
      serie.data = this.shufflePipe.transform(serie.data).shift();
      if (serie.id == 'alpha') {
        return serie;
      }

      serie.itemStyle = {
        normal: {
          label: {
            show: true,
            position: serie.itemStyle.normal.label.position,
            formatter: function (params) {
              const processedValue = numericalValues(params.value);
              return processedValue.round + ' ' + processedValue.unitname;
            }
          }
        }
      };
      return serie;
    });
  }

  onChartClick(chartLine) {
    if (chartLine.selfType === 'breadcrumb') {
      console.log('CLICKED ON BREADCRUMB');
      console.log(chartLine);
    } else {
      console.log('CLICKED ON MAP');
      this.dropvalue = chartLine.data.id;
      this.updateAllComponents(chartLine);
    }
  }

  onChange(val) {
    // console.log(val);
    this.updateAllComponents({ data: { id: val } });
  }

  private updateAllComponents(chartLine) {
    const key = chartLine.data.id;
    const kpis = this.config.dashboard1.mainKpis.filter((line, i) => {
      const k: any = Object.keys(line);
      if (line[k].population.id === key) {
        return true;
      }
    });

    if (kpis.length) {
      const data = kpis.shift();
      this.kpis = data[Object.keys(data)[0]];
      // console.log(this.chartInstance);
      this.chartInstance.exposurePerformanceBoxPlot.setOption({
        series: this.getexposurePerformanceBoxPlot(key)
      });

      this.chartInstance.ratingPerformance.setOption({
        series: this.getratingPerformance(key)
      });
      console.log(key);
      this.chartInstance.utpOutflowInflow.setOption({
        series: this.getutpOutflowInflow(key)
      });
    }
  }

  getexposure() {

    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.eChartsConfig.xAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
    };

    this.opts.exposure = {
      color: ['#D9534F'],
      grid: {
        height: 'auto',
        top: 40,
        bottom: 20,
        left: 100,
        right: 40
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: (params) => {
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '') + '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        position: 'top',
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.eChartsConfig.xAxis.axisLabel,
        data: ['W39 - 2018', 'W38 - 2018', 'W37 - 2018', 'W36 - 2018', 'W35 - 2018', 'W34 - 2018', 'W33 - 2018', 'W32 - 2018', 'W31 - 2018', 'W30 - 2018', 'W29 - 2018', 'W28 - 2018', 'W27 - 2018', 'W26 - 2018', 'W25 - 2018', 'W24 - 2018', 'W23 - 2018', 'W22 - 2018', 'W21 - 2018', 'W20 - 2018', 'W19 - 2018', 'W18 - 2018', 'W17 - 2018', 'W16 - 2018', 'W15 - 2018', 'W14 - 2018', 'W13 - 2018', 'W12 - 2018', 'W11 - 2018', 'W10 - 2018', 'W9 - 2018', 'W8 - 2018', 'W7 - 2018', 'W6 - 2018', 'W5 - 2018', 'W4 - 2018', 'W3 - 2018', 'W2 - 2018', 'W1 - 2018', 'W52 - 2017', 'W51 - 2017', 'W50 - 2017', 'W49 - 2017', 'W48 - 2017', 'W47 - 2017', 'W46 - 2017', 'W45 - 2017', 'W44 - 2017', 'W43 - 2017', 'W42 - 2017', 'W41 - 2017', 'W40 - 2017', 'W39 - 2017', 'W38 - 2017', 'W37 - 2017', 'W36 - 2017', 'W35 - 2017', 'W34 - 2017', 'W33 - 2017', 'W32 - 2017', 'W31 - 2017', 'W30 - 2017', 'W29 - 2017', 'W28 - 2017', 'W27 - 2017', 'W26 - 2017', 'W25 - 2017', 'W24 - 2017', 'W23 - 2017', 'W22 - 2017', 'W21 - 2017', 'W20 - 2017', 'W19 - 2017', 'W18 - 2017', 'W17 - 2017', 'W16 - 2017', 'W15 - 2017', 'W14 - 2017', 'W13 - 2017', 'W12 - 2017', 'W11 - 2017', 'W10 - 2017', 'W9 - 2017', 'W8 - 2017', 'W7 - 2017', 'W6 - 2017', 'W5 - 2017', 'W4 - 2017', 'W3 - 2017', 'W2 - 2017', 'W1 - 2017', 'W52 - 2016', 'W51 - 2016', 'W50 - 2016', 'W49 - 2016', 'W48 - 2016', 'W47 - 2016', 'W46 - 2016', 'W45 - 2016', 'W44 - 2016', 'W43 - 2016', 'W42 - 2016', 'W41 - 2016', 'W40 - 2016', 'W39 - 2016', 'W38 - 2016', 'W37 - 2016', 'W36 - 2016', 'W35 - 2016', 'W34 - 2016', 'W33 - 2016', 'W32 - 2016', 'W31 - 2016', 'W30 - 2016', 'W29 - 2016', 'W28 - 2016', 'W27 - 2016', 'W26 - 2016', 'W25 - 2016', 'W24 - 2016', 'W23 - 2016', 'W22 - 2016', 'W21 - 2016', 'W20 - 2016', 'W19 - 2016', 'W18 - 2016', 'W17 - 2016', 'W16 - 2016', 'W15 - 2016', 'W14 - 2016', 'W13 - 2016', 'W12 - 2016', 'W11 - 2016', 'W10 - 2016', 'W9 - 2016', 'W8 - 2016', 'W7 - 2016', 'W6 - 2016', 'W5 - 2016', 'W4 - 2016', 'W3 - 2016', 'W2 - 2016', 'W1 - 2016', 'W52 - 2015', 'W51 - 2015', 'W50 - 2015', 'W49 - 2015', 'W48 - 2015', 'W47 - 2015', 'W46 - 2015', 'W45 - 2015', 'W44 - 2015', 'W43 - 2015', 'W42 - 2015', 'W41 - 2015', 'W40 - 2015', 'W39 - 2015', 'W38 - 2015', 'W37 - 2015', 'W36 - 2015', 'W35 - 2015', 'W34 - 2015', 'W33 - 2015', 'W32 - 2015', 'W31 - 2015', 'W30 - 2015', 'W29 - 2015', 'W28 - 2015', 'W27 - 2015', 'W26 - 2015', 'W25 - 2015', 'W24 - 2015', 'W23 - 2015', 'W22 - 2015', 'W21 - 2015', 'W20 - 2015', 'W19 - 2015', 'W18 - 2015', 'W17 - 2015', 'W16 - 2015', 'W15 - 2015', 'W14 - 2015', 'W13 - 2015', 'W12 - 2015', 'W11 - 2015', 'W10 - 2015', 'W9 - 2015', 'W8 - 2015', 'W7 - 2015', 'W6 - 2015', 'W5 - 2015', 'W4 - 2015', 'W3 - 2015', 'W2 - 2015', 'W1 - 2015', 'W52 - 2014', 'W51 - 2014', 'W50 - 2014', 'W49 - 2014', 'W48 - 2014', 'W47 - 2014', 'W46 - 2014', 'W45 - 2014', 'W44 - 2014', 'W43 - 2014', 'W42 - 2014', 'W41 - 2014', 'W40 - 2014', 'W39 - 2014', 'W38 - 2014', 'W37 - 2014', 'W36 - 2014', 'W35 - 2014', 'W34 - 2014', 'W33 - 2014', 'W32 - 2014', 'W31 - 2014', 'W30 - 2014', 'W29 - 2014', 'W28 - 2014', 'W27 - 2014', 'W26 - 2014', 'W25 - 2014', 'W24 - 2014', 'W23 - 2014', 'W22 - 2014', 'W21 - 2014', 'W20 - 2014', 'W19 - 2014', 'W18 - 2014', 'W17 - 2014', 'W16 - 2014', 'W15 - 2014', 'W14 - 2014', 'W13 - 2014', 'W12 - 2014', 'W11 - 2014', 'W10 - 2014', 'W9 - 2014', 'W8 - 2014', 'W7 - 2014', 'W6 - 2014', 'W5 - 2014', 'W4 - 2014', 'W3 - 2014', 'W2 - 2014', 'W1 - 2014', 'W52 - 2013', 'W51 - 2013', 'W50 - 2013', 'W49 - 2013', 'W48 - 2013', 'W47 - 2013', 'W46 - 2013', 'W45 - 2013', 'W44 - 2013', 'W43 - 2013', 'W42 - 2013', 'W41 - 2013', 'W40 - 2013', 'W39 - 2013', 'W38 - 2013', 'W37 - 2013', 'W36 - 2013', 'W35 - 2013', 'W34 - 2013', 'W33 - 2013', 'W32 - 2013', 'W31 - 2013', 'W30 - 2013', 'W29 - 2013', 'W28 - 2013', 'W27 - 2013', 'W26 - 2013', 'W25 - 2013', 'W24 - 2013', 'W23 - 2013', 'W22 - 2013', 'W21 - 2013', 'W20 - 2013', 'W19 - 2013', 'W18 - 2013', 'W17 - 2013', 'W16 - 2013', 'W15 - 2013', 'W14 - 2013', 'W13 - 2013', 'W12 - 2013', 'W11 - 2013', 'W10 - 2013', 'W9 - 2013', 'W8 - 2013', 'W7 - 2013', 'W6 - 2013', 'W5 - 2013', 'W4 - 2013', 'W3 - 2013', 'W2 - 2013', 'W1 - 2013', 'W52 - 2012', 'W51 - 2012', 'W50 - 2012', 'W49 - 2012', 'W48 - 2012', 'W47 - 2012', 'W46 - 2012', 'W45 - 2012', 'W44 - 2012', 'W43 - 2012', 'W42 - 2012', 'W41 - 2012', 'W40 - 2012', 'W39 - 2012', 'W38 - 2012', 'W37 - 2012', 'W36 - 2012', 'W35 - 2012', 'W34 - 2012', 'W33 - 2012', 'W32 - 2012', 'W31 - 2012', 'W30 - 2012', 'W29 - 2012', 'W28 - 2012', 'W27 - 2012', 'W26 - 2012', 'W25 - 2012', 'W24 - 2012', 'W23 - 2012', 'W22 - 2012', 'W21 - 2012', 'W20 - 2012', 'W19 - 2012', 'W18 - 2012', 'W17 - 2012', 'W16 - 2012', 'W15 - 2012', 'W14 - 2012', 'W13 - 2012', 'W12 - 2012', 'W11 - 2012', 'W10 - 2012', 'W9 - 2012', 'W8 - 2012', 'W7 - 2012', 'W6 - 2012', 'W5 - 2012', 'W4 - 2012', 'W3 - 2012', 'W2 - 2012', 'W1 - 2012', 'W52 - 2011', 'W51 - 2011', 'W50 - 2011', 'W49 - 2011', 'W48 - 2011', 'W47 - 2011', 'W46 - 2011', 'W45 - 2011', 'W44 - 2011', 'W43 - 2011', 'W42 - 2011', 'W41 - 2011', 'W40 - 2011', 'W39 - 2011', 'W38 - 2011', 'W37 - 2011', 'W36 - 2011', 'W35 - 2011', 'W34 - 2011', 'W33 - 2011', 'W32 - 2011', 'W31 - 2011', 'W30 - 2011', 'W29 - 2011', 'W28 - 2011', 'W27 - 2011', 'W26 - 2011', 'W25 - 2011', 'W24 - 2011', 'W23 - 2011', 'W22 - 2011', 'W21 - 2011', 'W20 - 2011', 'W19 - 2011', 'W18 - 2011', 'W17 - 2011', 'W16 - 2011', 'W15 - 2011', 'W14 - 2011', 'W13 - 2011', 'W12 - 2011', 'W11 - 2011', 'W10 - 2011', 'W9 - 2011', 'W8 - 2011', 'W7 - 2011', 'W6 - 2011', 'W5 - 2011', 'W4 - 2011', 'W3 - 2011', 'W2 - 2011', 'W1 - 2011', 'W52 - 2010', 'W51 - 2010', 'W50 - 2010', 'W49 - 2010', 'W48 - 2010', 'W47 - 2010', 'W46 - 2010', 'W45 - 2010', 'W44 - 2010', 'W43 - 2010', 'W42 - 2010', 'W41 - 2010', 'W40 - 2010', 'W39 - 2010', 'W38 - 2010', 'W37 - 2010', 'W36 - 2010', 'W35 - 2010', 'W34 - 2010', 'W33 - 2010', 'W32 - 2010', 'W31 - 2010', 'W30 - 2010', 'W29 - 2010', 'W28 - 2010', 'W27 - 2010', 'W26 - 2010', 'W25 - 2010', 'W24 - 2010', 'W23 - 2010', 'W22 - 2010', 'W21 - 2010', 'W20 - 2010', 'W19 - 2010', 'W18 - 2010', 'W17 - 2010', 'W16 - 2010', 'W15 - 2010', 'W14 - 2010', 'W13 - 2010', 'W12 - 2010', 'W11 - 2010', 'W10 - 2010', 'W9 - 2010', 'W8 - 2010', 'W7 - 2010', 'W6 - 2010', 'W5 - 2010', 'W4 - 2010', 'W3 - 2010', 'W2 - 2010', 'W1 - 2010', 'W52 - 2009', 'W51 - 2009', 'W50 - 2009', 'W49 - 2009', 'W48 - 2009', 'W47 - 2009', 'W46 - 2009', 'W45 - 2009', 'W44 - 2009', 'W43 - 2009', 'W42 - 2009', 'W41 - 2009', 'W40 - 2009', 'W39 - 2009', 'W38 - 2009', 'W37 - 2009', 'W36 - 2009', 'W35 - 2009', 'W34 - 2009', 'W33 - 2009', 'W32 - 2009', 'W31 - 2009', 'W30 - 2009', 'W29 - 2009', 'W28 - 2009', 'W27 - 2009', 'W26 - 2009', 'W25 - 2009', 'W24 - 2009', 'W23 - 2009', 'W22 - 2009', 'W21 - 2009', 'W20 - 2009', 'W19 - 2009', 'W18 - 2009', 'W17 - 2009', 'W16 - 2009', 'W15 - 2009', 'W14 - 2009', 'W13 - 2009', 'W12 - 2009', 'W11 - 2009', 'W10 - 2009', 'W9 - 2009', 'W8 - 2009', 'W7 - 2009', 'W6 - 2009', 'W5 - 2009', 'W4 - 2009', 'W3 - 2009', 'W2 - 2009', 'W1 - 2009', 'W52 - 2008', 'W51 - 2008', 'W50 - 2008', 'W49 - 2008', 'W48 - 2008', 'W47 - 2008', 'W46 - 2008', 'W45 - 2008', 'W44 - 2008', 'W43 - 2008', 'W42 - 2008', 'W41 - 2008', 'W40 - 2008'].reverse()
      },
      yAxis: {
        // max: 55000000000,
        // min: 25000000000,
        scale: true,
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: axisyLabel,
        type: 'value'
      },
      dataZoom: {
        y: 250,
        show: false,
        realtime: true,
        start: 95,
        end: 100
      },
    };

    return [{
      name: 'exposure',
      data: this.config.dashboard1.tenYearsInWeeks.exposure.reverse(),
      type: 'line',
      symbol: eChartsConfig.eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.eChartsConfig.series.symbolSize,
      lineStyle: eChartsConfig.eChartsConfig.series.lineStyle
    }];
  }

  getnetMargin() {

    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.eChartsConfig.xAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
    };


    this.opts.netMargin = {
      color: ['#5CB85C'],
      grid: {
        height: 'auto',
        top: 20,
        bottom: 40,
        left: 100,
        right: 40
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: (params) => {
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '') + '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        show: false,
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.eChartsConfig.xAxis.axisLabel,
        data: ['W39 - 2018', 'W38 - 2018', 'W37 - 2018', 'W36 - 2018', 'W35 - 2018', 'W34 - 2018', 'W33 - 2018', 'W32 - 2018', 'W31 - 2018', 'W30 - 2018', 'W29 - 2018', 'W28 - 2018', 'W27 - 2018', 'W26 - 2018', 'W25 - 2018', 'W24 - 2018', 'W23 - 2018', 'W22 - 2018', 'W21 - 2018', 'W20 - 2018', 'W19 - 2018', 'W18 - 2018', 'W17 - 2018', 'W16 - 2018', 'W15 - 2018', 'W14 - 2018', 'W13 - 2018', 'W12 - 2018', 'W11 - 2018', 'W10 - 2018', 'W9 - 2018', 'W8 - 2018', 'W7 - 2018', 'W6 - 2018', 'W5 - 2018', 'W4 - 2018', 'W3 - 2018', 'W2 - 2018', 'W1 - 2018', 'W52 - 2017', 'W51 - 2017', 'W50 - 2017', 'W49 - 2017', 'W48 - 2017', 'W47 - 2017', 'W46 - 2017', 'W45 - 2017', 'W44 - 2017', 'W43 - 2017', 'W42 - 2017', 'W41 - 2017', 'W40 - 2017', 'W39 - 2017', 'W38 - 2017', 'W37 - 2017', 'W36 - 2017', 'W35 - 2017', 'W34 - 2017', 'W33 - 2017', 'W32 - 2017', 'W31 - 2017', 'W30 - 2017', 'W29 - 2017', 'W28 - 2017', 'W27 - 2017', 'W26 - 2017', 'W25 - 2017', 'W24 - 2017', 'W23 - 2017', 'W22 - 2017', 'W21 - 2017', 'W20 - 2017', 'W19 - 2017', 'W18 - 2017', 'W17 - 2017', 'W16 - 2017', 'W15 - 2017', 'W14 - 2017', 'W13 - 2017', 'W12 - 2017', 'W11 - 2017', 'W10 - 2017', 'W9 - 2017', 'W8 - 2017', 'W7 - 2017', 'W6 - 2017', 'W5 - 2017', 'W4 - 2017', 'W3 - 2017', 'W2 - 2017', 'W1 - 2017', 'W52 - 2016', 'W51 - 2016', 'W50 - 2016', 'W49 - 2016', 'W48 - 2016', 'W47 - 2016', 'W46 - 2016', 'W45 - 2016', 'W44 - 2016', 'W43 - 2016', 'W42 - 2016', 'W41 - 2016', 'W40 - 2016', 'W39 - 2016', 'W38 - 2016', 'W37 - 2016', 'W36 - 2016', 'W35 - 2016', 'W34 - 2016', 'W33 - 2016', 'W32 - 2016', 'W31 - 2016', 'W30 - 2016', 'W29 - 2016', 'W28 - 2016', 'W27 - 2016', 'W26 - 2016', 'W25 - 2016', 'W24 - 2016', 'W23 - 2016', 'W22 - 2016', 'W21 - 2016', 'W20 - 2016', 'W19 - 2016', 'W18 - 2016', 'W17 - 2016', 'W16 - 2016', 'W15 - 2016', 'W14 - 2016', 'W13 - 2016', 'W12 - 2016', 'W11 - 2016', 'W10 - 2016', 'W9 - 2016', 'W8 - 2016', 'W7 - 2016', 'W6 - 2016', 'W5 - 2016', 'W4 - 2016', 'W3 - 2016', 'W2 - 2016', 'W1 - 2016', 'W52 - 2015', 'W51 - 2015', 'W50 - 2015', 'W49 - 2015', 'W48 - 2015', 'W47 - 2015', 'W46 - 2015', 'W45 - 2015', 'W44 - 2015', 'W43 - 2015', 'W42 - 2015', 'W41 - 2015', 'W40 - 2015', 'W39 - 2015', 'W38 - 2015', 'W37 - 2015', 'W36 - 2015', 'W35 - 2015', 'W34 - 2015', 'W33 - 2015', 'W32 - 2015', 'W31 - 2015', 'W30 - 2015', 'W29 - 2015', 'W28 - 2015', 'W27 - 2015', 'W26 - 2015', 'W25 - 2015', 'W24 - 2015', 'W23 - 2015', 'W22 - 2015', 'W21 - 2015', 'W20 - 2015', 'W19 - 2015', 'W18 - 2015', 'W17 - 2015', 'W16 - 2015', 'W15 - 2015', 'W14 - 2015', 'W13 - 2015', 'W12 - 2015', 'W11 - 2015', 'W10 - 2015', 'W9 - 2015', 'W8 - 2015', 'W7 - 2015', 'W6 - 2015', 'W5 - 2015', 'W4 - 2015', 'W3 - 2015', 'W2 - 2015', 'W1 - 2015', 'W52 - 2014', 'W51 - 2014', 'W50 - 2014', 'W49 - 2014', 'W48 - 2014', 'W47 - 2014', 'W46 - 2014', 'W45 - 2014', 'W44 - 2014', 'W43 - 2014', 'W42 - 2014', 'W41 - 2014', 'W40 - 2014', 'W39 - 2014', 'W38 - 2014', 'W37 - 2014', 'W36 - 2014', 'W35 - 2014', 'W34 - 2014', 'W33 - 2014', 'W32 - 2014', 'W31 - 2014', 'W30 - 2014', 'W29 - 2014', 'W28 - 2014', 'W27 - 2014', 'W26 - 2014', 'W25 - 2014', 'W24 - 2014', 'W23 - 2014', 'W22 - 2014', 'W21 - 2014', 'W20 - 2014', 'W19 - 2014', 'W18 - 2014', 'W17 - 2014', 'W16 - 2014', 'W15 - 2014', 'W14 - 2014', 'W13 - 2014', 'W12 - 2014', 'W11 - 2014', 'W10 - 2014', 'W9 - 2014', 'W8 - 2014', 'W7 - 2014', 'W6 - 2014', 'W5 - 2014', 'W4 - 2014', 'W3 - 2014', 'W2 - 2014', 'W1 - 2014', 'W52 - 2013', 'W51 - 2013', 'W50 - 2013', 'W49 - 2013', 'W48 - 2013', 'W47 - 2013', 'W46 - 2013', 'W45 - 2013', 'W44 - 2013', 'W43 - 2013', 'W42 - 2013', 'W41 - 2013', 'W40 - 2013', 'W39 - 2013', 'W38 - 2013', 'W37 - 2013', 'W36 - 2013', 'W35 - 2013', 'W34 - 2013', 'W33 - 2013', 'W32 - 2013', 'W31 - 2013', 'W30 - 2013', 'W29 - 2013', 'W28 - 2013', 'W27 - 2013', 'W26 - 2013', 'W25 - 2013', 'W24 - 2013', 'W23 - 2013', 'W22 - 2013', 'W21 - 2013', 'W20 - 2013', 'W19 - 2013', 'W18 - 2013', 'W17 - 2013', 'W16 - 2013', 'W15 - 2013', 'W14 - 2013', 'W13 - 2013', 'W12 - 2013', 'W11 - 2013', 'W10 - 2013', 'W9 - 2013', 'W8 - 2013', 'W7 - 2013', 'W6 - 2013', 'W5 - 2013', 'W4 - 2013', 'W3 - 2013', 'W2 - 2013', 'W1 - 2013', 'W52 - 2012', 'W51 - 2012', 'W50 - 2012', 'W49 - 2012', 'W48 - 2012', 'W47 - 2012', 'W46 - 2012', 'W45 - 2012', 'W44 - 2012', 'W43 - 2012', 'W42 - 2012', 'W41 - 2012', 'W40 - 2012', 'W39 - 2012', 'W38 - 2012', 'W37 - 2012', 'W36 - 2012', 'W35 - 2012', 'W34 - 2012', 'W33 - 2012', 'W32 - 2012', 'W31 - 2012', 'W30 - 2012', 'W29 - 2012', 'W28 - 2012', 'W27 - 2012', 'W26 - 2012', 'W25 - 2012', 'W24 - 2012', 'W23 - 2012', 'W22 - 2012', 'W21 - 2012', 'W20 - 2012', 'W19 - 2012', 'W18 - 2012', 'W17 - 2012', 'W16 - 2012', 'W15 - 2012', 'W14 - 2012', 'W13 - 2012', 'W12 - 2012', 'W11 - 2012', 'W10 - 2012', 'W9 - 2012', 'W8 - 2012', 'W7 - 2012', 'W6 - 2012', 'W5 - 2012', 'W4 - 2012', 'W3 - 2012', 'W2 - 2012', 'W1 - 2012', 'W52 - 2011', 'W51 - 2011', 'W50 - 2011', 'W49 - 2011', 'W48 - 2011', 'W47 - 2011', 'W46 - 2011', 'W45 - 2011', 'W44 - 2011', 'W43 - 2011', 'W42 - 2011', 'W41 - 2011', 'W40 - 2011', 'W39 - 2011', 'W38 - 2011', 'W37 - 2011', 'W36 - 2011', 'W35 - 2011', 'W34 - 2011', 'W33 - 2011', 'W32 - 2011', 'W31 - 2011', 'W30 - 2011', 'W29 - 2011', 'W28 - 2011', 'W27 - 2011', 'W26 - 2011', 'W25 - 2011', 'W24 - 2011', 'W23 - 2011', 'W22 - 2011', 'W21 - 2011', 'W20 - 2011', 'W19 - 2011', 'W18 - 2011', 'W17 - 2011', 'W16 - 2011', 'W15 - 2011', 'W14 - 2011', 'W13 - 2011', 'W12 - 2011', 'W11 - 2011', 'W10 - 2011', 'W9 - 2011', 'W8 - 2011', 'W7 - 2011', 'W6 - 2011', 'W5 - 2011', 'W4 - 2011', 'W3 - 2011', 'W2 - 2011', 'W1 - 2011', 'W52 - 2010', 'W51 - 2010', 'W50 - 2010', 'W49 - 2010', 'W48 - 2010', 'W47 - 2010', 'W46 - 2010', 'W45 - 2010', 'W44 - 2010', 'W43 - 2010', 'W42 - 2010', 'W41 - 2010', 'W40 - 2010', 'W39 - 2010', 'W38 - 2010', 'W37 - 2010', 'W36 - 2010', 'W35 - 2010', 'W34 - 2010', 'W33 - 2010', 'W32 - 2010', 'W31 - 2010', 'W30 - 2010', 'W29 - 2010', 'W28 - 2010', 'W27 - 2010', 'W26 - 2010', 'W25 - 2010', 'W24 - 2010', 'W23 - 2010', 'W22 - 2010', 'W21 - 2010', 'W20 - 2010', 'W19 - 2010', 'W18 - 2010', 'W17 - 2010', 'W16 - 2010', 'W15 - 2010', 'W14 - 2010', 'W13 - 2010', 'W12 - 2010', 'W11 - 2010', 'W10 - 2010', 'W9 - 2010', 'W8 - 2010', 'W7 - 2010', 'W6 - 2010', 'W5 - 2010', 'W4 - 2010', 'W3 - 2010', 'W2 - 2010', 'W1 - 2010', 'W52 - 2009', 'W51 - 2009', 'W50 - 2009', 'W49 - 2009', 'W48 - 2009', 'W47 - 2009', 'W46 - 2009', 'W45 - 2009', 'W44 - 2009', 'W43 - 2009', 'W42 - 2009', 'W41 - 2009', 'W40 - 2009', 'W39 - 2009', 'W38 - 2009', 'W37 - 2009', 'W36 - 2009', 'W35 - 2009', 'W34 - 2009', 'W33 - 2009', 'W32 - 2009', 'W31 - 2009', 'W30 - 2009', 'W29 - 2009', 'W28 - 2009', 'W27 - 2009', 'W26 - 2009', 'W25 - 2009', 'W24 - 2009', 'W23 - 2009', 'W22 - 2009', 'W21 - 2009', 'W20 - 2009', 'W19 - 2009', 'W18 - 2009', 'W17 - 2009', 'W16 - 2009', 'W15 - 2009', 'W14 - 2009', 'W13 - 2009', 'W12 - 2009', 'W11 - 2009', 'W10 - 2009', 'W9 - 2009', 'W8 - 2009', 'W7 - 2009', 'W6 - 2009', 'W5 - 2009', 'W4 - 2009', 'W3 - 2009', 'W2 - 2009', 'W1 - 2009', 'W52 - 2008', 'W51 - 2008', 'W50 - 2008', 'W49 - 2008', 'W48 - 2008', 'W47 - 2008', 'W46 - 2008', 'W45 - 2008', 'W44 - 2008', 'W43 - 2008', 'W42 - 2008', 'W41 - 2008', 'W40 - 2008'].reverse()
      },
      yAxis: {
        // max: 3500000000,
        // min: 1500000000,
        scale: true,
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: axisyLabel,
        type: 'value'
      },
      dataZoom: {
        show: true,
        realtime: true,
        start: 95,
        end: 100
      }
    };

    return [{
      name: 'netMargin',
      data: this.config.dashboard1.tenYearsInWeeks.netMargin.reverse(),
      type: 'line',
      symbol: eChartsConfig.eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.eChartsConfig.series.symbolSize,
      lineStyle: eChartsConfig.eChartsConfig.series.lineStyle
    }];
  }

  getperforming() {
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.eChartsConfig.xAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
    };

    this.opts.performing = {
      color: ['#5CB85C', '#D9534F'],
      grid: {
        height: 'auto',
        top: 20,
        bottom: 20,
        left: 100,
        right: 40
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: (params) => {
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
            const processedValue = numericalValues(item.data);
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '') + '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        show: true,
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.eChartsConfig.xAxis.axisLabel,
        data: ['W39 - 2018', 'W38 - 2018', 'W37 - 2018', 'W36 - 2018', 'W35 - 2018', 'W34 - 2018', 'W33 - 2018', 'W32 - 2018', 'W31 - 2018', 'W30 - 2018', 'W29 - 2018', 'W28 - 2018', 'W27 - 2018', 'W26 - 2018', 'W25 - 2018', 'W24 - 2018', 'W23 - 2018', 'W22 - 2018', 'W21 - 2018', 'W20 - 2018', 'W19 - 2018', 'W18 - 2018', 'W17 - 2018', 'W16 - 2018', 'W15 - 2018', 'W14 - 2018', 'W13 - 2018', 'W12 - 2018', 'W11 - 2018', 'W10 - 2018', 'W9 - 2018', 'W8 - 2018', 'W7 - 2018', 'W6 - 2018', 'W5 - 2018', 'W4 - 2018', 'W3 - 2018', 'W2 - 2018', 'W1 - 2018', 'W52 - 2017', 'W51 - 2017', 'W50 - 2017', 'W49 - 2017', 'W48 - 2017', 'W47 - 2017', 'W46 - 2017', 'W45 - 2017', 'W44 - 2017', 'W43 - 2017', 'W42 - 2017', 'W41 - 2017', 'W40 - 2017', 'W39 - 2017', 'W38 - 2017', 'W37 - 2017', 'W36 - 2017', 'W35 - 2017', 'W34 - 2017', 'W33 - 2017', 'W32 - 2017', 'W31 - 2017', 'W30 - 2017', 'W29 - 2017', 'W28 - 2017', 'W27 - 2017', 'W26 - 2017', 'W25 - 2017', 'W24 - 2017', 'W23 - 2017', 'W22 - 2017', 'W21 - 2017', 'W20 - 2017', 'W19 - 2017', 'W18 - 2017', 'W17 - 2017', 'W16 - 2017', 'W15 - 2017', 'W14 - 2017', 'W13 - 2017', 'W12 - 2017', 'W11 - 2017', 'W10 - 2017', 'W9 - 2017', 'W8 - 2017', 'W7 - 2017', 'W6 - 2017', 'W5 - 2017', 'W4 - 2017', 'W3 - 2017', 'W2 - 2017', 'W1 - 2017', 'W52 - 2016', 'W51 - 2016', 'W50 - 2016', 'W49 - 2016', 'W48 - 2016', 'W47 - 2016', 'W46 - 2016', 'W45 - 2016', 'W44 - 2016', 'W43 - 2016', 'W42 - 2016', 'W41 - 2016', 'W40 - 2016', 'W39 - 2016', 'W38 - 2016', 'W37 - 2016', 'W36 - 2016', 'W35 - 2016', 'W34 - 2016', 'W33 - 2016', 'W32 - 2016', 'W31 - 2016', 'W30 - 2016', 'W29 - 2016', 'W28 - 2016', 'W27 - 2016', 'W26 - 2016', 'W25 - 2016', 'W24 - 2016', 'W23 - 2016', 'W22 - 2016', 'W21 - 2016', 'W20 - 2016', 'W19 - 2016', 'W18 - 2016', 'W17 - 2016', 'W16 - 2016', 'W15 - 2016', 'W14 - 2016', 'W13 - 2016', 'W12 - 2016', 'W11 - 2016', 'W10 - 2016', 'W9 - 2016', 'W8 - 2016', 'W7 - 2016', 'W6 - 2016', 'W5 - 2016', 'W4 - 2016', 'W3 - 2016', 'W2 - 2016', 'W1 - 2016', 'W52 - 2015', 'W51 - 2015', 'W50 - 2015', 'W49 - 2015', 'W48 - 2015', 'W47 - 2015', 'W46 - 2015', 'W45 - 2015', 'W44 - 2015', 'W43 - 2015', 'W42 - 2015', 'W41 - 2015', 'W40 - 2015', 'W39 - 2015', 'W38 - 2015', 'W37 - 2015', 'W36 - 2015', 'W35 - 2015', 'W34 - 2015', 'W33 - 2015', 'W32 - 2015', 'W31 - 2015', 'W30 - 2015', 'W29 - 2015', 'W28 - 2015', 'W27 - 2015', 'W26 - 2015', 'W25 - 2015', 'W24 - 2015', 'W23 - 2015', 'W22 - 2015', 'W21 - 2015', 'W20 - 2015', 'W19 - 2015', 'W18 - 2015', 'W17 - 2015', 'W16 - 2015', 'W15 - 2015', 'W14 - 2015', 'W13 - 2015', 'W12 - 2015', 'W11 - 2015', 'W10 - 2015', 'W9 - 2015', 'W8 - 2015', 'W7 - 2015', 'W6 - 2015', 'W5 - 2015', 'W4 - 2015', 'W3 - 2015', 'W2 - 2015', 'W1 - 2015', 'W52 - 2014', 'W51 - 2014', 'W50 - 2014', 'W49 - 2014', 'W48 - 2014', 'W47 - 2014', 'W46 - 2014', 'W45 - 2014', 'W44 - 2014', 'W43 - 2014', 'W42 - 2014', 'W41 - 2014', 'W40 - 2014', 'W39 - 2014', 'W38 - 2014', 'W37 - 2014', 'W36 - 2014', 'W35 - 2014', 'W34 - 2014', 'W33 - 2014', 'W32 - 2014', 'W31 - 2014', 'W30 - 2014', 'W29 - 2014', 'W28 - 2014', 'W27 - 2014', 'W26 - 2014', 'W25 - 2014', 'W24 - 2014', 'W23 - 2014', 'W22 - 2014', 'W21 - 2014', 'W20 - 2014', 'W19 - 2014', 'W18 - 2014', 'W17 - 2014', 'W16 - 2014', 'W15 - 2014', 'W14 - 2014', 'W13 - 2014', 'W12 - 2014', 'W11 - 2014', 'W10 - 2014', 'W9 - 2014', 'W8 - 2014', 'W7 - 2014', 'W6 - 2014', 'W5 - 2014', 'W4 - 2014', 'W3 - 2014', 'W2 - 2014', 'W1 - 2014', 'W52 - 2013', 'W51 - 2013', 'W50 - 2013', 'W49 - 2013', 'W48 - 2013', 'W47 - 2013', 'W46 - 2013', 'W45 - 2013', 'W44 - 2013', 'W43 - 2013', 'W42 - 2013', 'W41 - 2013', 'W40 - 2013', 'W39 - 2013', 'W38 - 2013', 'W37 - 2013', 'W36 - 2013', 'W35 - 2013', 'W34 - 2013', 'W33 - 2013', 'W32 - 2013', 'W31 - 2013', 'W30 - 2013', 'W29 - 2013', 'W28 - 2013', 'W27 - 2013', 'W26 - 2013', 'W25 - 2013', 'W24 - 2013', 'W23 - 2013', 'W22 - 2013', 'W21 - 2013', 'W20 - 2013', 'W19 - 2013', 'W18 - 2013', 'W17 - 2013', 'W16 - 2013', 'W15 - 2013', 'W14 - 2013', 'W13 - 2013', 'W12 - 2013', 'W11 - 2013', 'W10 - 2013', 'W9 - 2013', 'W8 - 2013', 'W7 - 2013', 'W6 - 2013', 'W5 - 2013', 'W4 - 2013', 'W3 - 2013', 'W2 - 2013', 'W1 - 2013', 'W52 - 2012', 'W51 - 2012', 'W50 - 2012', 'W49 - 2012', 'W48 - 2012', 'W47 - 2012', 'W46 - 2012', 'W45 - 2012', 'W44 - 2012', 'W43 - 2012', 'W42 - 2012', 'W41 - 2012', 'W40 - 2012', 'W39 - 2012', 'W38 - 2012', 'W37 - 2012', 'W36 - 2012', 'W35 - 2012', 'W34 - 2012', 'W33 - 2012', 'W32 - 2012', 'W31 - 2012', 'W30 - 2012', 'W29 - 2012', 'W28 - 2012', 'W27 - 2012', 'W26 - 2012', 'W25 - 2012', 'W24 - 2012', 'W23 - 2012', 'W22 - 2012', 'W21 - 2012', 'W20 - 2012', 'W19 - 2012', 'W18 - 2012', 'W17 - 2012', 'W16 - 2012', 'W15 - 2012', 'W14 - 2012', 'W13 - 2012', 'W12 - 2012', 'W11 - 2012', 'W10 - 2012', 'W9 - 2012', 'W8 - 2012', 'W7 - 2012', 'W6 - 2012', 'W5 - 2012', 'W4 - 2012', 'W3 - 2012', 'W2 - 2012', 'W1 - 2012', 'W52 - 2011', 'W51 - 2011', 'W50 - 2011', 'W49 - 2011', 'W48 - 2011', 'W47 - 2011', 'W46 - 2011', 'W45 - 2011', 'W44 - 2011', 'W43 - 2011', 'W42 - 2011', 'W41 - 2011', 'W40 - 2011', 'W39 - 2011', 'W38 - 2011', 'W37 - 2011', 'W36 - 2011', 'W35 - 2011', 'W34 - 2011', 'W33 - 2011', 'W32 - 2011', 'W31 - 2011', 'W30 - 2011', 'W29 - 2011', 'W28 - 2011', 'W27 - 2011', 'W26 - 2011', 'W25 - 2011', 'W24 - 2011', 'W23 - 2011', 'W22 - 2011', 'W21 - 2011', 'W20 - 2011', 'W19 - 2011', 'W18 - 2011', 'W17 - 2011', 'W16 - 2011', 'W15 - 2011', 'W14 - 2011', 'W13 - 2011', 'W12 - 2011', 'W11 - 2011', 'W10 - 2011', 'W9 - 2011', 'W8 - 2011', 'W7 - 2011', 'W6 - 2011', 'W5 - 2011', 'W4 - 2011', 'W3 - 2011', 'W2 - 2011', 'W1 - 2011', 'W52 - 2010', 'W51 - 2010', 'W50 - 2010', 'W49 - 2010', 'W48 - 2010', 'W47 - 2010', 'W46 - 2010', 'W45 - 2010', 'W44 - 2010', 'W43 - 2010', 'W42 - 2010', 'W41 - 2010', 'W40 - 2010', 'W39 - 2010', 'W38 - 2010', 'W37 - 2010', 'W36 - 2010', 'W35 - 2010', 'W34 - 2010', 'W33 - 2010', 'W32 - 2010', 'W31 - 2010', 'W30 - 2010', 'W29 - 2010', 'W28 - 2010', 'W27 - 2010', 'W26 - 2010', 'W25 - 2010', 'W24 - 2010', 'W23 - 2010', 'W22 - 2010', 'W21 - 2010', 'W20 - 2010', 'W19 - 2010', 'W18 - 2010', 'W17 - 2010', 'W16 - 2010', 'W15 - 2010', 'W14 - 2010', 'W13 - 2010', 'W12 - 2010', 'W11 - 2010', 'W10 - 2010', 'W9 - 2010', 'W8 - 2010', 'W7 - 2010', 'W6 - 2010', 'W5 - 2010', 'W4 - 2010', 'W3 - 2010', 'W2 - 2010', 'W1 - 2010', 'W52 - 2009', 'W51 - 2009', 'W50 - 2009', 'W49 - 2009', 'W48 - 2009', 'W47 - 2009', 'W46 - 2009', 'W45 - 2009', 'W44 - 2009', 'W43 - 2009', 'W42 - 2009', 'W41 - 2009', 'W40 - 2009', 'W39 - 2009', 'W38 - 2009', 'W37 - 2009', 'W36 - 2009', 'W35 - 2009', 'W34 - 2009', 'W33 - 2009', 'W32 - 2009', 'W31 - 2009', 'W30 - 2009', 'W29 - 2009', 'W28 - 2009', 'W27 - 2009', 'W26 - 2009', 'W25 - 2009', 'W24 - 2009', 'W23 - 2009', 'W22 - 2009', 'W21 - 2009', 'W20 - 2009', 'W19 - 2009', 'W18 - 2009', 'W17 - 2009', 'W16 - 2009', 'W15 - 2009', 'W14 - 2009', 'W13 - 2009', 'W12 - 2009', 'W11 - 2009', 'W10 - 2009', 'W9 - 2009', 'W8 - 2009', 'W7 - 2009', 'W6 - 2009', 'W5 - 2009', 'W4 - 2009', 'W3 - 2009', 'W2 - 2009', 'W1 - 2009', 'W52 - 2008', 'W51 - 2008', 'W50 - 2008', 'W49 - 2008', 'W48 - 2008', 'W47 - 2008', 'W46 - 2008', 'W45 - 2008', 'W44 - 2008', 'W43 - 2008', 'W42 - 2008', 'W41 - 2008', 'W40 - 2008'].reverse()
      },
      yAxis: {
        // min: 30000000000,
        scale: true,
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: axisyLabel,
        type: 'value'
      },
      dataZoom: {
        y: 200,
        show: false,
        realtime: true,
        start: 95,
        end: 100
      },
    };

    return [{
      name: 'nonPerforming',
      type: 'bar',
      color: '#D9534F',
      stack: 'A',
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      data: this.config.dashboard1.tenYearsInWeeks.nonPerforming.reverse()
    },{
      name: 'performing',
      type: 'bar',
      color: '#5CB85C',
      stack: 'A',
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      data: this.config.dashboard1.tenYearsInWeeks.performing.reverse()
    }];
  }

  getnonPerforming() {
    const axisyLabel = JSON.parse(JSON.stringify(eChartsConfig.eChartsConfig.xAxis.axisLabel));
    axisyLabel.formatter = function (value, index) {
      const processedValue = numericalValues(value);
      return processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '');
    };

    this.opts.nonPerforming = {
      color: ['#D9534F'],
      grid: {
        height: 'auto',
        top: 20,
        bottom: 40,
        left: 100,
        right: 40
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: (params) => {
          const colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
          let rez = params[0].axisValue + '<br>';
          params.forEach(item => {
              const processedValue = numericalValues(item.data);
            rez += colorSpan(item.color) + ' ' + item.seriesName + ': ' + processedValue.round + ' ' + (processedValue.unitname ? processedValue.unitname : '') + '<br />';
          });

          return rez;
        }
      },
      xAxis: {
        type: 'category',
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.eChartsConfig.xAxis.axisLabel,
        data: ['W39 - 2018', 'W38 - 2018', 'W37 - 2018', 'W36 - 2018', 'W35 - 2018', 'W34 - 2018', 'W33 - 2018', 'W32 - 2018', 'W31 - 2018', 'W30 - 2018', 'W29 - 2018', 'W28 - 2018', 'W27 - 2018', 'W26 - 2018', 'W25 - 2018', 'W24 - 2018', 'W23 - 2018', 'W22 - 2018', 'W21 - 2018', 'W20 - 2018', 'W19 - 2018', 'W18 - 2018', 'W17 - 2018', 'W16 - 2018', 'W15 - 2018', 'W14 - 2018', 'W13 - 2018', 'W12 - 2018', 'W11 - 2018', 'W10 - 2018', 'W9 - 2018', 'W8 - 2018', 'W7 - 2018', 'W6 - 2018', 'W5 - 2018', 'W4 - 2018', 'W3 - 2018', 'W2 - 2018', 'W1 - 2018', 'W52 - 2017', 'W51 - 2017', 'W50 - 2017', 'W49 - 2017', 'W48 - 2017', 'W47 - 2017', 'W46 - 2017', 'W45 - 2017', 'W44 - 2017', 'W43 - 2017', 'W42 - 2017', 'W41 - 2017', 'W40 - 2017', 'W39 - 2017', 'W38 - 2017', 'W37 - 2017', 'W36 - 2017', 'W35 - 2017', 'W34 - 2017', 'W33 - 2017', 'W32 - 2017', 'W31 - 2017', 'W30 - 2017', 'W29 - 2017', 'W28 - 2017', 'W27 - 2017', 'W26 - 2017', 'W25 - 2017', 'W24 - 2017', 'W23 - 2017', 'W22 - 2017', 'W21 - 2017', 'W20 - 2017', 'W19 - 2017', 'W18 - 2017', 'W17 - 2017', 'W16 - 2017', 'W15 - 2017', 'W14 - 2017', 'W13 - 2017', 'W12 - 2017', 'W11 - 2017', 'W10 - 2017', 'W9 - 2017', 'W8 - 2017', 'W7 - 2017', 'W6 - 2017', 'W5 - 2017', 'W4 - 2017', 'W3 - 2017', 'W2 - 2017', 'W1 - 2017', 'W52 - 2016', 'W51 - 2016', 'W50 - 2016', 'W49 - 2016', 'W48 - 2016', 'W47 - 2016', 'W46 - 2016', 'W45 - 2016', 'W44 - 2016', 'W43 - 2016', 'W42 - 2016', 'W41 - 2016', 'W40 - 2016', 'W39 - 2016', 'W38 - 2016', 'W37 - 2016', 'W36 - 2016', 'W35 - 2016', 'W34 - 2016', 'W33 - 2016', 'W32 - 2016', 'W31 - 2016', 'W30 - 2016', 'W29 - 2016', 'W28 - 2016', 'W27 - 2016', 'W26 - 2016', 'W25 - 2016', 'W24 - 2016', 'W23 - 2016', 'W22 - 2016', 'W21 - 2016', 'W20 - 2016', 'W19 - 2016', 'W18 - 2016', 'W17 - 2016', 'W16 - 2016', 'W15 - 2016', 'W14 - 2016', 'W13 - 2016', 'W12 - 2016', 'W11 - 2016', 'W10 - 2016', 'W9 - 2016', 'W8 - 2016', 'W7 - 2016', 'W6 - 2016', 'W5 - 2016', 'W4 - 2016', 'W3 - 2016', 'W2 - 2016', 'W1 - 2016', 'W52 - 2015', 'W51 - 2015', 'W50 - 2015', 'W49 - 2015', 'W48 - 2015', 'W47 - 2015', 'W46 - 2015', 'W45 - 2015', 'W44 - 2015', 'W43 - 2015', 'W42 - 2015', 'W41 - 2015', 'W40 - 2015', 'W39 - 2015', 'W38 - 2015', 'W37 - 2015', 'W36 - 2015', 'W35 - 2015', 'W34 - 2015', 'W33 - 2015', 'W32 - 2015', 'W31 - 2015', 'W30 - 2015', 'W29 - 2015', 'W28 - 2015', 'W27 - 2015', 'W26 - 2015', 'W25 - 2015', 'W24 - 2015', 'W23 - 2015', 'W22 - 2015', 'W21 - 2015', 'W20 - 2015', 'W19 - 2015', 'W18 - 2015', 'W17 - 2015', 'W16 - 2015', 'W15 - 2015', 'W14 - 2015', 'W13 - 2015', 'W12 - 2015', 'W11 - 2015', 'W10 - 2015', 'W9 - 2015', 'W8 - 2015', 'W7 - 2015', 'W6 - 2015', 'W5 - 2015', 'W4 - 2015', 'W3 - 2015', 'W2 - 2015', 'W1 - 2015', 'W52 - 2014', 'W51 - 2014', 'W50 - 2014', 'W49 - 2014', 'W48 - 2014', 'W47 - 2014', 'W46 - 2014', 'W45 - 2014', 'W44 - 2014', 'W43 - 2014', 'W42 - 2014', 'W41 - 2014', 'W40 - 2014', 'W39 - 2014', 'W38 - 2014', 'W37 - 2014', 'W36 - 2014', 'W35 - 2014', 'W34 - 2014', 'W33 - 2014', 'W32 - 2014', 'W31 - 2014', 'W30 - 2014', 'W29 - 2014', 'W28 - 2014', 'W27 - 2014', 'W26 - 2014', 'W25 - 2014', 'W24 - 2014', 'W23 - 2014', 'W22 - 2014', 'W21 - 2014', 'W20 - 2014', 'W19 - 2014', 'W18 - 2014', 'W17 - 2014', 'W16 - 2014', 'W15 - 2014', 'W14 - 2014', 'W13 - 2014', 'W12 - 2014', 'W11 - 2014', 'W10 - 2014', 'W9 - 2014', 'W8 - 2014', 'W7 - 2014', 'W6 - 2014', 'W5 - 2014', 'W4 - 2014', 'W3 - 2014', 'W2 - 2014', 'W1 - 2014', 'W52 - 2013', 'W51 - 2013', 'W50 - 2013', 'W49 - 2013', 'W48 - 2013', 'W47 - 2013', 'W46 - 2013', 'W45 - 2013', 'W44 - 2013', 'W43 - 2013', 'W42 - 2013', 'W41 - 2013', 'W40 - 2013', 'W39 - 2013', 'W38 - 2013', 'W37 - 2013', 'W36 - 2013', 'W35 - 2013', 'W34 - 2013', 'W33 - 2013', 'W32 - 2013', 'W31 - 2013', 'W30 - 2013', 'W29 - 2013', 'W28 - 2013', 'W27 - 2013', 'W26 - 2013', 'W25 - 2013', 'W24 - 2013', 'W23 - 2013', 'W22 - 2013', 'W21 - 2013', 'W20 - 2013', 'W19 - 2013', 'W18 - 2013', 'W17 - 2013', 'W16 - 2013', 'W15 - 2013', 'W14 - 2013', 'W13 - 2013', 'W12 - 2013', 'W11 - 2013', 'W10 - 2013', 'W9 - 2013', 'W8 - 2013', 'W7 - 2013', 'W6 - 2013', 'W5 - 2013', 'W4 - 2013', 'W3 - 2013', 'W2 - 2013', 'W1 - 2013', 'W52 - 2012', 'W51 - 2012', 'W50 - 2012', 'W49 - 2012', 'W48 - 2012', 'W47 - 2012', 'W46 - 2012', 'W45 - 2012', 'W44 - 2012', 'W43 - 2012', 'W42 - 2012', 'W41 - 2012', 'W40 - 2012', 'W39 - 2012', 'W38 - 2012', 'W37 - 2012', 'W36 - 2012', 'W35 - 2012', 'W34 - 2012', 'W33 - 2012', 'W32 - 2012', 'W31 - 2012', 'W30 - 2012', 'W29 - 2012', 'W28 - 2012', 'W27 - 2012', 'W26 - 2012', 'W25 - 2012', 'W24 - 2012', 'W23 - 2012', 'W22 - 2012', 'W21 - 2012', 'W20 - 2012', 'W19 - 2012', 'W18 - 2012', 'W17 - 2012', 'W16 - 2012', 'W15 - 2012', 'W14 - 2012', 'W13 - 2012', 'W12 - 2012', 'W11 - 2012', 'W10 - 2012', 'W9 - 2012', 'W8 - 2012', 'W7 - 2012', 'W6 - 2012', 'W5 - 2012', 'W4 - 2012', 'W3 - 2012', 'W2 - 2012', 'W1 - 2012', 'W52 - 2011', 'W51 - 2011', 'W50 - 2011', 'W49 - 2011', 'W48 - 2011', 'W47 - 2011', 'W46 - 2011', 'W45 - 2011', 'W44 - 2011', 'W43 - 2011', 'W42 - 2011', 'W41 - 2011', 'W40 - 2011', 'W39 - 2011', 'W38 - 2011', 'W37 - 2011', 'W36 - 2011', 'W35 - 2011', 'W34 - 2011', 'W33 - 2011', 'W32 - 2011', 'W31 - 2011', 'W30 - 2011', 'W29 - 2011', 'W28 - 2011', 'W27 - 2011', 'W26 - 2011', 'W25 - 2011', 'W24 - 2011', 'W23 - 2011', 'W22 - 2011', 'W21 - 2011', 'W20 - 2011', 'W19 - 2011', 'W18 - 2011', 'W17 - 2011', 'W16 - 2011', 'W15 - 2011', 'W14 - 2011', 'W13 - 2011', 'W12 - 2011', 'W11 - 2011', 'W10 - 2011', 'W9 - 2011', 'W8 - 2011', 'W7 - 2011', 'W6 - 2011', 'W5 - 2011', 'W4 - 2011', 'W3 - 2011', 'W2 - 2011', 'W1 - 2011', 'W52 - 2010', 'W51 - 2010', 'W50 - 2010', 'W49 - 2010', 'W48 - 2010', 'W47 - 2010', 'W46 - 2010', 'W45 - 2010', 'W44 - 2010', 'W43 - 2010', 'W42 - 2010', 'W41 - 2010', 'W40 - 2010', 'W39 - 2010', 'W38 - 2010', 'W37 - 2010', 'W36 - 2010', 'W35 - 2010', 'W34 - 2010', 'W33 - 2010', 'W32 - 2010', 'W31 - 2010', 'W30 - 2010', 'W29 - 2010', 'W28 - 2010', 'W27 - 2010', 'W26 - 2010', 'W25 - 2010', 'W24 - 2010', 'W23 - 2010', 'W22 - 2010', 'W21 - 2010', 'W20 - 2010', 'W19 - 2010', 'W18 - 2010', 'W17 - 2010', 'W16 - 2010', 'W15 - 2010', 'W14 - 2010', 'W13 - 2010', 'W12 - 2010', 'W11 - 2010', 'W10 - 2010', 'W9 - 2010', 'W8 - 2010', 'W7 - 2010', 'W6 - 2010', 'W5 - 2010', 'W4 - 2010', 'W3 - 2010', 'W2 - 2010', 'W1 - 2010', 'W52 - 2009', 'W51 - 2009', 'W50 - 2009', 'W49 - 2009', 'W48 - 2009', 'W47 - 2009', 'W46 - 2009', 'W45 - 2009', 'W44 - 2009', 'W43 - 2009', 'W42 - 2009', 'W41 - 2009', 'W40 - 2009', 'W39 - 2009', 'W38 - 2009', 'W37 - 2009', 'W36 - 2009', 'W35 - 2009', 'W34 - 2009', 'W33 - 2009', 'W32 - 2009', 'W31 - 2009', 'W30 - 2009', 'W29 - 2009', 'W28 - 2009', 'W27 - 2009', 'W26 - 2009', 'W25 - 2009', 'W24 - 2009', 'W23 - 2009', 'W22 - 2009', 'W21 - 2009', 'W20 - 2009', 'W19 - 2009', 'W18 - 2009', 'W17 - 2009', 'W16 - 2009', 'W15 - 2009', 'W14 - 2009', 'W13 - 2009', 'W12 - 2009', 'W11 - 2009', 'W10 - 2009', 'W9 - 2009', 'W8 - 2009', 'W7 - 2009', 'W6 - 2009', 'W5 - 2009', 'W4 - 2009', 'W3 - 2009', 'W2 - 2009', 'W1 - 2009', 'W52 - 2008', 'W51 - 2008', 'W50 - 2008', 'W49 - 2008', 'W48 - 2008', 'W47 - 2008', 'W46 - 2008', 'W45 - 2008', 'W44 - 2008', 'W43 - 2008', 'W42 - 2008', 'W41 - 2008', 'W40 - 2008'].reverse()
      },
      yAxis: {
        // min: 7000000000,
        scale: true,
        axisLine: eChartsConfig.eChartsConfig.xAxis.axisLine,
        splitLine: eChartsConfig.eChartsConfig.xAxis.splitLine,
        axisLabel: axisyLabel,
        type: 'value'
      },
      dataZoom: {
        y: 200,
        show: false,
        realtime: true,
        start: 95,
        end: 100
      },
    };
    return [{
      name: 'nonPerforming',
      type: 'bar',
      data: this.config.dashboard1.tenYearsInWeeks.nonPerforming.reverse()
    }];
  }

  onChartInit(chart, e) {
    console.log(this.chartInstance);
    this.chartInstance[chart] = e;

    if (chart === 'performing') {
      echarts.connect([
        this.chartInstance.exposure,
        this.chartInstance.netMargin,
        this.chartInstance.performing
      ]);
    }
  }
}
