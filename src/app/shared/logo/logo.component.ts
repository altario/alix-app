// angular
import { Component, OnInit, Input } from '@angular/core';

// services
import { LocaldataService } from '@app/services/localdata.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  logo: any = '';

  constructor(private localData: LocaldataService) {}

  ngOnInit() {
    this.logo = this.localData.getPageBrand();
  }
}
