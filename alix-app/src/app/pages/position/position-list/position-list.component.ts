import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {
  companies = [{
      id: 1,
      name: 'ACME & Company',
      loanType: 'Loan XYZ',
      dataStart: '15 Nov 03',
      dateEnd: '14 Nov 21',
      state: 'Performing',
      infos: [{
          title: 'RAROC',
          data: '8.7%'
        },
        {
          title: 'Time to Maturity',
          data: '5 of 18Y'
        },
        {
          title: 'LOV',
          data: '30.1M€'
        },
        {
          title: 'CE',
          data: '8.7M€'
        }
      ]
    },
    {
      id: 2,
      name: 'ACME & Company',
      loanType: 'Loan XYZ',
      dataStart: '15 Nov 03',
      dateEnd: '14 Nov 21',
      state: 'Fully Paid',
      infos: [{
          title: 'RAROC',
          data: '8.7%'
        },
        {
          title: 'Time to Maturity',
          data: '5 of 18Y'
        },
        {
          title: 'LOV',
          data: '30.1M€'
        },
        {
          title: 'CE',
          data: '8.7M€'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
