// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulation-row',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationRowComponent implements OnInit {
  @Input() position: any = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDashboard(id) {
    this.router.navigate(['underwriter/simulations', id]);
  }

  getState(text: string): string {
    if (text === 'Performing') {
      return 'Simulation';
    } else if (text === 'Fully Paid') {
      return 'Position';
    } else if (text === 'Past Due Loan') {
      return 'Position';
    } else if (text === 'Unlikely To Pay') {
      return 'Position';
    } else if (text === 'Bad Loan') {
      return 'Negotiation';
    }
  }
}
