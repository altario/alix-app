// angular
import { Component, OnInit } from '@angular/core';

// services
import { LocaldataService } from '@services/localdata.service';

// anim
import { fadeAnimation } from '@app/animations';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Alix Dashboards';

  constructor(private ld: LocaldataService) {}

  ngOnInit() {
    this.ld.setInitData();
  }
}
