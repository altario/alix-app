// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pno-row',
  templateUrl: './pno.component.html',
  styleUrls: ['./pno.component.scss']
})
export class PnoRowComponent implements OnInit {
  @Input() pno: any = {};

  restructuring: any = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.restructuring = this.pno;
  }

  getValue(str, type) {
    if (type === 'value') { return Number(str.match(/[-0-9.]+/)); }
    if (type === 'small') { return str.match(/[a-zA-Z].+/); }
  }

  goToDetail() {
     this.router.navigate(['monitor', 'pno', 'pno-detail']);
  }
}
