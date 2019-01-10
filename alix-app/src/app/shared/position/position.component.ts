// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position-row',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionRowComponent implements OnInit {
  @Input() position: any = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDashboard(id, type) {
    this.router.navigate(['monitor/positions/position', id, type]);
  }
}
