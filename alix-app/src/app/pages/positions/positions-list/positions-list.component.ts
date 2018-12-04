// angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent implements OnInit {
  companies = [
    {
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
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
    },
    {
      id: 5,
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
    },
    {
      id: 6,
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
    },
    {
      id: 7,
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
    },
    {
      id: 8,
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
    },
    {
      id: 9,
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
    },
    {
      id: 10,
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
    },
    {
      id: 11,
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
    },
    {
      id: 12,
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
    },
    {
      id: 13,
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
    },
    {
      id: 14,
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
