import { Component, OnInit } from "@angular/core";
import { MockapiService } from "../../_services/_mockapi.service";

@Component({
    selector: "app-location-dashboard",
    templateUrl: "./location-dashboard.component.html",
    styleUrls: ["./location-dashboard.component.scss"],
    providers: [MockapiService]
})
export class LocationDashboardComponent implements OnInit {
    panels = [
        {
            type: "component_a", // Tipo de component a renderizar
            has_slider: false, // slider unico para os 2 components
            position: 1,

            left_component: {
                has_slider: true, // slider apenas para o component à esquerda,
                title: "Type Of Neighbourhood",
                subtitle: false,
                data_icon: "house.svg",
                data_name: "Residential",
                items: []
            },

            right_component: {
                has_slider: false, // slider apenas para o component à direita,
                serie: [
                    {
                        data: [],
                        type: "line",
                        areaStyle: {}
                    }
                ]
            }
        }
    ];

    constructor(private api: MockapiService) {}

    ngOnInit() {
        this.api.getJSON().subscribe(data => {
            console.log(data);
        });
    }
}
