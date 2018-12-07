// angular
import { Component, OnInit } from '@angular/core';

// services
import { LocaldataService } from '@app/services/localdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageType: any = '';

  constructor(private localData: LocaldataService) {}
  ngOnInit() {
    this.pageType = this.localData.getPageType();
  }
}
