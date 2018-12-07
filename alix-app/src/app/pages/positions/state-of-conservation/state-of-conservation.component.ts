// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';
import * as chartdataset from '@data/charts-dataset';
import * as plotchartdataset from '@data/plotcharts-dataset';

// graph color overrides
import { eChartsConfig } from '@global/charts';

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
    '2015': ['assets/images/differencePerYear/street-left2.png', 'assets/images/differencePerYear/street-right2.png'],
    '2018': ['assets/images/differencePerYear/street-left1.png', 'assets/images/differencePerYear/street-right1.png']
  }; // #HC

  public numbOfAssetsBySc;
  public priceEvolutionBySc;

  public opts: any = {};
  public chartInstance: any = {};

  lat: number = 45.4758422;
  lng: number = 9.1911364;
  zoom = 14;
  radius = 70;

  marketsLat = ["45.4758422", "45.48587161", "45.48109781", "45.46883059", "45.48764068", "45.48186006", "45.48565012", "45.4585844", "45.46065191", "45.46602205", "45.47110028", "45.46625231", "45.47043358", "45.46600876", "45.47344738", "45.49096373", "45.47774985", "45.47595712", "45.46968914", "45.4720252", "45.46640951", "45.46825854", "45.47249142", "45.49039629", "45.49156038", "45.47305626", "45.48868816", "45.46830083", "45.46984589", "45.49247054", "45.4903843", "45.47711782", "45.48073376", "45.46413841", "45.46158726", "45.48842146", "45.48290988", "45.48501727", "45.48549476", "45.48111683", "45.46862185", "45.47370618", "45.48852091", "45.48810619", "45.46327707", "45.47780555", "45.48544444", "45.48622555", "45.4621401", "45.47561284", "45.47155489", "45.48182875", "45.46580796", "45.47721347", "45.49163972", "45.47028084", "45.48538937", "45.46567821", "45.47146358", "45.4722284", "45.46793933", "45.47195448", "45.4739212", "45.47988391", "45.47796816", "45.47899842", "45.47164734", "45.48217444", "45.4883349", "45.4718839", "45.46541579", "45.48516614", "45.47200037", "45.49015564", "45.464034", "45.46731812", "45.4927457", "45.47814566", "45.48315634", "45.47390739", "45.47593772", "45.45855437", "45.48128691", "45.47484148", "45.47604781", "45.46135148", "45.48543688", "45.4792224", "45.47204154", "45.49199599", "45.47294836", "45.49020679", "45.47571398", "45.4721408", "45.46858158", "45.46873383", "45.47333424", "45.47371759", "45.47063568", "45.48329602", "45.47825734", "45.49208944", "45.47619984", "45.47821536", "45.47598988", "45.47423217", "45.45829874", "45.4694997", "45.47426687", "45.48180549", "45.47818609", "45.47581854", "45.49049397", "45.48688844", "45.46684307", "45.47578435", "45.47552209", "45.48671595", "45.48863881", "45.49141168", "45.47249867", "45.46287163", "45.47088793", "45.4781361", "45.47720008", "45.48918785", "45.47975343", "45.4788353", "45.49048017", "45.46794759", "45.47345341", "45.46341811", "45.47989491", "45.47851076", "45.4790592", "45.48730162", "45.48205604", "45.48090681", "45.48871136", "45.46251775", "45.47223922", "45.48433982", "45.47689172", "45.48328883", "45.47379404", "45.4917869", "45.46444263", "45.47821313", "45.47416982", "45.48002765", "45.47565123", "45.4589023", "45.46022832", "45.4822507", "45.46954573", "45.46807517", "45.4792809", "45.47677031", "45.47191487", "45.47180252", "45.49123118", "45.48458386", "45.46743125", "45.48518848", "45.46377078", "45.47121032", "45.47983701", "45.45913783", "45.46633146", "45.47582612", "45.47372971", "45.49220792", "45.48135889", "45.47984165", "45.47981526", "45.48345255", "45.4844868", "45.47386672", "45.47046188", "45.4826472", "45.47399901", "45.46148421", "45.47984158", "45.4790122", "45.48015038", "45.47266413", "45.48521419", "45.47972325", "45.48881202", "45.47396278", "45.48842586", "45.47862769", "45.48266779", "45.47779959", "45.48318565", "45.4641587", "45.47665254", "45.47148142", "45.48905293", "45.47381385", "45.47782186"]
  marketsLng = [9.1911364, 9.19449874, 9.20103519, 9.16973685, 9.18321966, 9.17139173, 9.18902185, 9.19617884, 9.19415219, 9.2081373, 9.17616965, 9.17785552, 9.18452173, 9.17542964, 9.1983005, 9.20269482, 9.17307523, 9.19360121, 9.20851617, 9.2079065, 9.18380052, 9.17476934, 9.20571433, 9.20314497, 9.20176217, 9.18626749, 9.19720259, 9.21045028, 9.18207112, 9.19707989, 9.18660279, 9.20505211, 9.18901926, 9.19160121, 9.20582369, 9.18145316, 9.17324396, 9.17752973, 9.17762232, 9.17101699, 9.21435601, 9.18973875, 9.20231955, 9.19639442, 9.19930154, 9.18880959, 9.20235255, 9.20662111, 9.19276519, 9.16806771, 9.19845111, 9.17591713, 9.20230558, 9.18615427, 9.18748703, 9.19601674, 9.18449938, 9.20595665, 9.21337579, 9.19696455, 9.19234474, 9.21434292, 9.18834205, 9.20269518, 9.19596304, 9.20654005, 9.19855174, 9.19744278, 9.20662242, 9.17770531, 9.1802447, 9.19119014, 9.21098272, 9.20105023, 9.17646674, 9.19139964, 9.1980686, 9.16941664, 9.16895001, 9.20318325, 9.20108801, 9.19815548, 9.18740395, 9.18332537, 9.21308931, 9.2016528, 9.20712495, 9.20039294, 9.18263835, 9.20049766, 9.21471748, 9.18717471, 9.18796515, 9.21388915, 9.1688949, 9.2053929, 9.20185081, 9.17415211, 9.18051262, 9.21226695, 9.205475, 9.19360145, 9.21402934, 9.18065303, 9.18593195, 9.17212247, 9.19523666, 9.187201, 9.16677964, 9.20494958, 9.19665, 9.1753563, 9.1808299, 9.18522692, 9.19036584, 9.18685912, 9.19277163, 9.20698659, 9.17626661, 9.19855101, 9.18054532, 9.20823235, 9.19948735, 9.18112397, 9.17019621, 9.18012085, 9.18727231, 9.20409728, 9.20053683, 9.17267228, 9.18604377, 9.17832724, 9.19062426, 9.19955805, 9.20260215, 9.17325278, 9.17532628, 9.20146923, 9.18843685, 9.1808568, 9.20329647, 9.18456358, 9.1967187, 9.21283114, 9.17280955, 9.19041513, 9.2011609, 9.21266792, 9.2012008, 9.17806702, 9.17033344, 9.19051046, 9.1794158, 9.19462, 9.17999174, 9.19458551, 9.20229116, 9.1822688, 9.20168995, 9.19202865, 9.1896836, 9.18677149, 9.18364857, 9.21200282, 9.17846674, 9.2130886, 9.19852546, 9.19683246, 9.206577, 9.16672822, 9.20676163, 9.19927496, 9.21527573, 9.17744186, 9.19407496, 9.20340462, 9.20391487, 9.20461482, 9.21244115, 9.18474746, 9.21173561, 9.2042075, 9.21608092, 9.19526656, 9.18844833, 9.17638178, 9.17095559, 9.18064771, 9.20323322, 9.21169279, 9.17730336, 9.20870236, 9.16917853, 9.18982047, 9.21191449, 9.20298027, 9.17907255, 9.20781697, 9.19965075, 9.16690052, 9.19166776];

  colors = {'blue':'#00B5E9', 'green':'#7AC143', 'lightgreen':'#C7DA2C', 'yellow':'#F2E603', 'orange':'#FCB86B', 'red':'#E9545C'};

  markers: any;

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
    const counts = { 'blue': 4, 'green':22, 'lightgreen': 46, 'yellow': 19, 'orange': 8, 'red': 4 };
    this.marketsLat = this.shuffle(this.marketsLat);
    this.marketsLng = this.shuffle(this.marketsLng);

    Object.keys(counts).map((color) => {

      for (let i = 0; i < counts[color]; i++){
        markers.push({ lat: parseFloat(this.marketsLat.shift()), lng: this.marketsLng.shift(), color: this.colors[color]  });
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
      Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years) [
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
    const popSelected = chartdataset.dossier1ChartsData.stateOfConservation.priceEvolutionBySc.filter(line => line.population === population);

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
      symbol: eChartsConfig.series.symbol,
      symbolSize: eChartsConfig.series.symbolSize,
      lineStyle: { ...eChartsConfig.series.lineStyle, color: lineColors[i] },
      itemStyle: { color: lineColors[i] }
    }));

    return series;
  }

  updatePriceEvolutionBySc(population) {
    this.chartInstance.priceEvolutionBySc.setOption({
      series: this.getpriceEvolutionBySc(population)
    });
  }

  getscpPriceEvo(population = 'population1'): Array<any> {

    this.opts.scpPriceEvo = {
      color: ['#333333', '#D291BC'],
      grid: {
        left: 100,
        right: eChartsConfig.grid.right
      },
      xAxis: {
        type: 'value',
        splitLine: eChartsConfig.xAxis.splitLine,
        axisLabel: eChartsConfig.xAxis.axisLabel,
        axisLine: eChartsConfig.xAxis.axisLine
      },
      yAxis: {
        type: 'value',
        splitLine: eChartsConfig.yAxis.splitLine,
        axisLabel: eChartsConfig.yAxis.axisLabel,
        axisLine: eChartsConfig.yAxis.axisLine
      }
    };

    const series = plotchartdataset.dossier1PlotChartsData.stateOfConservation.scpPriceEvo.filter((line) => {
      if (line.population === population) {
        return line;
      }
    });

    const x = series.map((line) => line.values).shift();

    return x;
  }

  onChartInit(chart, e) {
    this.chartInstance[chart] = e;
  }
}

