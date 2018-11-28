import { Component, OnInit } from "@angular/core";
import { MockapiService } from "../../_services/_mockapi.service";

const specs = [ // Array de objectos que corresponde a cada componente
    {
        type: 'StackedComponent', // Tipo de component a renderizar
        has_slider: false, // slider unico para os 2 components
        position: 1,

        left_component: {
            has_slider: true, // slider apenas para o component à esquerda,
            title: 'Type Of Neighbourhood',
            subtitle: false,
            data_icon: 'house.svg',
            data_name: 'Residential',
            items: [
                { name: 'Residencial', color: '#f80', percentage: '81%', abs: '4002' },
                { name: 'Retail', color: '#f80', percentage: '10%', abs: '512' },
                { name: 'Hospitality', color: '#f80', percentage: '8%', abs: '472' },
                { name: 'Offices', color: '#f80', percentage: '1%', abs: '50' },
            ],
        },

        right_component: {
            has_slider: false, // slider apenas para o component à direita,
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name: '搜索引擎',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
    }
];

@Component({
    selector: "app-dashboard",
    templateUrl: "./main-dashboard.component.html",
    styleUrls: ["./main-dashboard.component.scss"],
    providers: [MockapiService]
})
export class MainDashboardComponent implements OnInit {
    specs:any;
    
    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON().subscribe(data => {
            console.log(data);
        });

        this.specs = specs;
    }
}
