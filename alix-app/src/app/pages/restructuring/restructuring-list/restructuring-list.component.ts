// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restructuring-list',
  templateUrl: './restructuring-list.component.html',
  styleUrls: ['./restructuring-list.component.scss']
})
export class RestructuringListComponent implements OnInit {
  public restructuringList = [
    {
      id: 1,
      counterpart: 'Carron Costruzioni Generali S.p.A.',
      position: 'CPEO-14423',
      status: 'PDL',
      currentExposure: '243.7M€',
      businessPlanRecovery: '240M€ - 7m',
      adjustedRecovery: '228M€ - 19m',
      adjustedNetMargin: '4.8M€',
      expectedVsAdjustedNetMargin: '74.2%'
    },
    {
      id: 2,
      counterpart: 'Littel-Padberg S.p.A.',
      position: 'CPEO-11223',
      status: 'UTP',
      currentExposure: '163.1M€',
      businessPlanRecovery: '161M€ in 8m',
      adjustedRecovery: '164M€ - 9m',
      adjustedNetMargin: '5.1M€',
      expectedVsAdjustedNetMargin: '108%'
    },
    {
      id: 3,
      counterpart: 'Colombo S.p.A.',
      position: 'CPEO-43153',
      status: 'PDL',
      currentExposure: '343.7M€',
      businessPlanRecovery: '340M€ - 7m',
      adjustedRecovery: '319M€ - 19m',
      adjustedNetMargin: '-7.2M€',
      expectedVsAdjustedNetMargin: '-20.6%'
    },
    {
      id: 4,
      counterpart: 'Fiore S.p.A.',
      position: 'CPEO-14423',
      status: 'PDL',
      currentExposure: '243.7M€',
      businessPlanRecovery: '240M€ - 7m',
      adjustedRecovery: '228M€ - 9m',
      adjustedNetMargin: '4.8M€',
      expectedVsAdjustedNetMargin: '34.4%'
    },
    {
      id: 5,
      counterpart: 'Damico Group S.p.A.',
      position: 'CPEO-14423',
      status: 'UTP',
      currentExposure: '243.7M€',
      businessPlanRecovery: '240M€ - 7m',
      adjustedRecovery: '228M€ - 9m',
      adjustedNetMargin: '4.8M€',
      expectedVsAdjustedNetMargin: '74.2%'
    },
    {
      id: 6,
      counterpart: 'PLMJS S.p.A.',
      position: 'CPEO-14423',
      status: 'PDL',
      currentExposure: '243.7M€',
      businessPlanRecovery: '240M€ - 7m',
      adjustedRecovery: '228M€ - 9m',
      adjustedNetMargin: '4.8M€',
      expectedVsAdjustedNetMargin: '74.2%'
    },
    {
      id: 7,
      counterpart: 'Amber & Co S.p.A.',
      position: 'CPEO-14423',
      status: 'PDL',
      currentExposure: '243.7M€',
      businessPlanRecovery: '240M€ - 7m',
      adjustedRecovery: '228M€ - 9m',
      adjustedNetMargin: '-842K€',
      expectedVsAdjustedNetMargin: '-4.5%'
    },
    {
      id: 8,
      counterpart: 'PLMJS S.p.A.',
      position: 'CPEO-14423',
      status: 'PDL',
      currentExposure: '243.7M€',
      businessPlanRecovery: '240M€ - 7m',
      adjustedRecovery: '228M€ - 9m',
      adjustedNetMargin: '4.8M€',
      expectedVsAdjustedNetMargin: '74.2%'
    }
  ];

  @Input() position: any = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDashboard(id) {
    this.router.navigate(['monitor/restructuring/restructuring-detail', id]);
  }
}
