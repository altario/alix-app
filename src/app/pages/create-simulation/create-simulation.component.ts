import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-simulation',
  templateUrl: './create-simulation.component.html',
  styleUrls: ['./create-simulation.component.scss']
})
export class CreateSimulationComponent implements OnInit {
  moreInfo = false;

  constructor() {}
  ngOnInit() {}

  showMoreInfo() {
    this.moreInfo = !this.moreInfo;
  }
}
