// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restructuring-row',
  templateUrl: './restructuring.component.html',
  styleUrls: ['./restructuring.component.scss']
})
export class RestructuringRowComponent implements OnInit {
  @Input() restructuring: any = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  getValue(str, type) {
    if (type === 'value') { return Number(str.match(/[-0-9.]+/)); }
    if (type === 'small') { return str.match(/[a-zA-Z].+/); }
  }

  goToDetail() {
    this.router.navigate(['monitor', 'restructuring', 'restructuring-detail']);
  }
}
