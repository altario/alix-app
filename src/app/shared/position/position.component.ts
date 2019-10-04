// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// services
import { LocaldataService } from '@services/localdata.service';

@Component({
  selector: 'app-position-row',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionRowComponent implements OnInit {
  @Input() position: any = {};

  constructor(private router: Router, private ld: LocaldataService) {}

  ngOnInit() {}

  goToDashboard(id, type) {
    const pageType = this.ld.getPageType();
    this.router.navigate([`${pageType.split('-')[0]}/positions/position`, id, type]);
  }
}
