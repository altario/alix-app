// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// dataset
import * as dataset from '@data/dataset';

@Component({
  selector: 'app-state-of-conservation',
  templateUrl: './state-of-conservation.component.html',
  styleUrls: ['./state-of-conservation.component.scss']
})

export class StateOfConservationComponent implements OnInit {
  public config: any;
  public selectedStateOfConservationToday: object;
  public selectedStateOfConservationPSM: object;
  public selectedSOCAllAssets: object;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.config = dataset.dossiersMainData.dossier1.stateOfConservation;

      this.selectedStateOfConservationToday = this.config.stateOfConservationToday.populations.population1;
      this.selectedStateOfConservationPSM = this.config.stateOfConservationPricePerSqm.populations.population1;
      this.selectedSOCAllAssets = this.initLastStateOfConservationAllAssets();
      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      console.log(this.selectedStateOfConservationPSM);
      console.log(this.config);
    });
  }

  getSCTodayPopulationNames(): Array<any> {
    return Object.keys(this.config.stateOfConservationToday.populations).map((population, i) => {
      return { id: i, key: population, value: this.config.stateOfConservationToday.populations[population].populationName.value };
    });
  }

  changeSCTodayValue(populationId): void {
    this.selectedStateOfConservationToday = this.config.stateOfConservationToday.populations[populationId];
  }

  changeSCPpsmValue(populationId): void {
    this.selectedStateOfConservationPSM = this.config.stateOfConservationPricePerSqm.populations[populationId];
  }

  initLastStateOfConservationAllAssets(): object {
    // Just incase... This is to get the last object of the years object.
    return this.config.panelFromMapStateOfConservationBreakdownAllAssets.years[
      Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years)[
      Object.keys(this.config.panelFromMapStateOfConservationBreakdownAllAssets.years).length - 1]
    ];
  }

}

