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

  public options: any = {};

  public initOpts: any = {
    renderer: 'canvas'
  };

  private data = [{
    id: 'consumerGoods',
    name: 'Consumer Goods',
    value: [3761046153.84615, 0.0717948717948718, null],
    children: [{
      id: 'agriculture',
      name: 'Agriculture',
      value: [1203534769.23077, 0.32, 0.0220788738193239]
    }, {
      id: 'foodBeverage',
      name: 'Food & Beverage',
      value: [1165924307.69231, 0.31, 0.02138890901247]
    }, {
      id: 'nonDurableHouseholdProducts',
      name: 'Non Durable Household Products',
      value: [789819692.307692, 0.21, 0.0144892609439313]
    }, {
      id: 'personalProducts',
      name: 'Personal Products',
      value: [601767384.615385, 0.16, 0.011039436909662]
    }]
  },
  {
    id: 'automotiveIndustrials',
    name: 'Automotive & Industrials',
    value: [10745846153.8462, 0.205128205128205, null],
    children: [{
      id: 'automobiles',
      name: 'Automobiles',
      value: [4448780307.69231, 0.414, 0.0816129800107152]
    }, {
      id: 'aerospaceDefense',
      name: 'Aerospace & Defense',
      value: [773700923.076923, 0.072, 0.0141935617409939]
    }, {
      id: 'buildingProducts',
      name: 'Building Products',
      value: [311629538.461538, 0.029, 0.00571685125678923]
    }, {
      id: 'constructionEngineering',
      name: 'Construction & Engineering',
      value: [2127677538.46154, 0.198, 0.0390322947877334]
    }, {
      id: 'electricalComponentsEquipment',
      name: 'Electrical Components & Equipment',
      value: [225662769.230769, 0.021, 0.00413978884112324]
    }, {
      id: 'machinery',
      name: 'Machinery',
      value: [343867076.923077, 0.032, 0.00630824966266398]
    }, {
      id: 'tradingCompaniesDistributors',
      name: 'Trading Companies & Distributors',
      value: [1536656000., 0.143, 0.0281899906800296]
    }, {
      id: 'chemicals',
      name: 'Chemicals',
      value: [977872000., 0.091, 0.0179390849782007]
    }]
  },
  {
    id: 'transportation',
    name: 'Transportation',
    value: [1880523076.92308, 0.0358974358974359, null],
    children: [{
      id: 'airFreightLogistics',
      name: 'Air Freight & Logistics',
      value: [267034276.923077, 0.142, 0.00489875012866249]
    }, {
      id: 'airlines',
      name: 'Airlines',
      value: [693913015.384615, 0.369, 0.0127298506864539]
    }, {
      id: 'marine',
      name: 'Marine',
      value: [364821476.923077, 0.194, 0.00669265862648256]
    }, {
      id: 'railroads',
      name: 'Railroads',
      value: [47013076.9230769, 0.025, 0.000862456008567341]
    }, {
      id: 'trucking',
      name: 'Trucking',
      value: [507741230.769231, 0.27, 0.00931452489252728]
    }]
  },
  {
    id: 'telecomMediaAndTechnology',
    name: 'Telecom, Media and Technology',
    value: [3223753846.15385, 0.0615384615384615, null],
    children: [{
      id: 'media',
      name: 'Media',
      value: [789819692.307692, 0.245, 0.0144892609439313]
    }, {
      id: 'itServices',
      name: 'IT Services',
      value: [557709415.384615, 0.173, 0.0102311924216331]
    }, {
      id: 'software',
      name: 'Software',
      value: [145068923.076923, 0.045, 0.00266129282643636]
    }, {
      id: 'technologyHardwareEquipment',
      name: 'Technology Hardware & Equipment',
      value: [167635200, 0.052, 0.00307527171054869]
    }, {
      id: 'semiconductorsSemiconductorEquipment',
      name: 'Semiconductors & Semiconductor Equipment',
      value: [106383876.923077, 0.033, 0.00195161473938667]
    }, {
      id: 'telecommunicationServices',
      name: 'Telecommunication Services',
      value: [1457136738.46154, 0.452, 0.0267312079455386]
    }]
  },
  {
    id: 'energyAndBasicMaterials',
    name: 'Energy and Basic Materials',
    value: [5910215384.61539, 0.112820512820513, null],
    children: [{
      id: 'oilGasDrilling',
      name: 'Oil & Gas Drilling',
      value: [1483464061.53846, 0.251, 0.0272141833103363]
    }, {
      id: 'oilGasEquipmentServices',
      name: 'Oil & Gas Equipment & Services',
      value: [726956492.307692, 0.123, 0.0133360340524756]
    }, {
      id: 'oilGasConsumableFuels',
      name: 'Oil, Gas & Consumable Fuels',
      value: [265959692.307692, 0.045, 0.00487903684846667]
    }, {
      id: 'metalsMining',
      name: 'Metals & Mining',
      value: [189126892.307692, 0.032, 0.00346953731446519]
    }, {
      id: 'constructionMaterials',
      name: 'Construction Materials',
      value: [455086584.615385, 0.077, 0.00834857416293186]
    }, {
      id: 'utilities',
      name: 'Utilities',
      value: [2789621661.53846, 0.472, 0.0511756753883615]
    }]
  },
  {
    id: 'infrastructureRealEstate',
    name: 'Infrastructure & Real Estate',
    value: [6716153846.15385, 0.128205128205128, null],
    children: [{
      id: 'reDevelopers',
      name: 'RE Developers',
      value: [2095440000, 0.312, 0.0384408963818586]
    }, {
      id: 'reGeneralContractors',
      name: 'RE General Contractors',
      value: [1880523076.92308, 0.28, 0.0344982403426936]
    }, {
      id: 'reAssetsForTrading',
      name: 'RE Assets for Trading',
      value: [107458461.538462, 0.016, 0.00197132801958249]
    }, {
      id: 'reRetailMortgages',
      name: 'RE Retail Mortgages',
      value: [2330505384.61538, 0.347, 0.0427531764246953]
    }, {
      id: 'infrastructures',
      name: 'Infrastructures',
      value: [302226923.076923, 0.0449999999999999, 0.00554436005507575]
    }]
  },
  {
    id: 'financialInstitutions',
    name: 'Financial Institutions',
    value: [5372923076.92308, 0.102564102564103, null],
    children: [{
      id: 'consumerFinance',
      name: 'Consumer Finance',
      value: [3186143384.61538, 0.593, 0.0584498757806209]
    }, {
      id: 'capitalMarkets',
      name: 'Capital Markets',
      value: [1703216615.38462, 0.317, 0.0312455491103825]
    }, {
      id: 'insurance',
      name: 'Insurance',
      value: [483563076.923077, 0.0900000000000001, 0.00887097608812122]
    }]
  },
  {
    id: 'publicFinance',
    name: 'Public Finance',
    value: [3761046153.84615, 0.0717948717948718, null],
    children: [{
      id: 'publicFinance',
      name: 'Public Finance',
      value: [3761046153.84615, 1, 0.0689964806853872]
    }]
  },
  {
    id: 'healthcarePharma',
    name: 'Healthcare & Pharma',
    value: [3223753846.15385, 0.0615384615384615, null],
    children: [{
      id: 'healthCareEquipmentServices',
      name: 'Health Care Equipment & Services',
      value: [1911686030.76923, 0.593, 0.0350699254683725]
    }, {
      id: 'pharmaceuticalsBiotechnologyLifeSciences',
      name: 'Pharmaceuticals, Biotechnology & Life Sciences',
      value: [1312067815.38462, 0.407, 0.0240699151191022]
    }]
  },
  {
    id: 'retailAndLuxury',
    name: 'Retail and Luxury',
    value: [4835630769.23077, 0.0923076923076923, null],
    children: [{
      id: 'luxuryGoods',
      name: 'Luxury Goods',
      value: [1402332923.07692, 0.29, 0.0257258306555515]
    }, {
      id: 'fashionApparel',
      name: 'Fashion & Apparel',
      value: [1552237476.92308, 0.321, 0.0284758332428691]
    }, {
      id: 'householdDurables',
      name: 'Household Durables',
      value: [773700923.076923, 0.16, 0.0141935617409939]
    }, {
      id: 'leisureProducts',
      name: 'Leisure Products',
      value: [870413538.461538, 0.18, 0.0159677569586182]
    }, {
      id: 'gdo',
      name: 'GDO',
      value: [236945907.692307, 0.0489999999999999, 0.00434677828317939]
    }]
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    value: [2955107692.30769, 0.0564102564102564, null],
    children: [{
      id: 'travelTourism',
      name: 'Travel & Tourism',
      value: [1507104923.07692, 0.51, 0.0276478754746445]
    }, {
      id: 'accommodation',
      name: 'Accommodation',
      value: [1019512153.84615, 0.345, 0.0187029745857889]
    }, {
      id: 'restaurantsBars',
      name: 'Restaurants & Bars',
      value: [428490615.384616, 0.145, 0.00786067047808519]
    }]
  }
  ];

  constructor() {

  }

  ngOnInit() {
    const format = formatUtil;
console.log(formatUtil);
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

              arr.push(
                '{household| ' + format.addCommas((+params.value[2].toFixed(2)) * 100) + '%}'
              );

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
        data: this.data
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
}
