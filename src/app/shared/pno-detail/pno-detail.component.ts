// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// services
import { LocaldataService } from '@services/localdata.service';

@Component({
  selector: 'app-pno-detail-row',
  templateUrl: './pno-detail.component.html',
  styleUrls: ['./pno-detail.component.scss']
})
export class PnoDetailRowComponent implements OnInit {
  @Input() position: any = [];

  constructor(private router: Router, private ld: LocaldataService) {}

  ngOnInit() {
  }

  getValue(str, type) {
    if (type === 'value') { return str.match(/[-0-9.,]+/); }
    if (type === 'small') { return str.match(/[a-zA-Z\%].+/); }
  }

  goToDashboard(id, type) {
    const pageType = this.ld.getPageType();
    // this.router.navigate([`${pageType.split('-')[0]}/pno-details/pno-detail`, id, type]);
  }
}
