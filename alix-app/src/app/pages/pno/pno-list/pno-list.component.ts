// angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pno-list',
  templateUrl: './pno-list.component.html',
  styleUrls: ['./pno-list.component.scss']
})
export class PnoListComponent implements OnInit {
  public pnoList = [
    ['Infrastructure & Real Estate', 'RE Retail Mortgages', '2330.5M€', '21.43 %', 'red'],
    ['Automotive & Industrials', 'Automobiles', '4448.8M€', '18.0 %', 'orange'],
    ['Financial Institutions', 'Capital Markets', '3782.5M€', '17.28 %', 'orange'],
    ['Public Finance', 'Public Finance', '3761.0M€', '17.11 %', 'orange'],
    ['Financial Institutions', 'Consumer Finance', '3186.1M€', '16.25 %', 'orange'],
    ['Energy and Basic Materials', 'Utilities', '2789.6M€', '15.77 %', 'orange'],
    ['Infrastructure & Real Estate', 'RE Developers', '2095.4M€', '15.29 %', 'orange'],
    ['Automotive & Industrials', 'Construction & Engineering', '2127.7M€', '14.37 %', 'orange'],
    ['Healthcare & Pharma', 'Healthcare Equipment & Services', '1911.7M€', '14.23 %', 'orange'],
    ['Infrastructure & Real Estate', 'RE General Contractors', '1880.5M€', '13.52 %', 'orange'],
    ['Financial Institutions', 'Insurance', '1590.4M€', '12.98 %', 'orange'],
    ['Retail and Luxury', 'Fashion & Apparel', '1552.2M€', '12.72 %', 'orange'],
    ['Automotive & Industrials', 'Trading Companies & Distributors', '1536.7M€', '12.34 %', 'orange'],
    ['Hospitality', 'Travel & Tourism', '1507.1M€', '11.84 %', 'orange'],
    ['Energy and Basic Materials', 'Oil & Gas Drilling', '1483.5M€', '11.37 %', 'orange'],
    ['Telecom, Media and Technology', 'Telecommunication Services', '1457.1M€', '10.80 %', 'orange'],
    ['Retail and Luxury', 'Luxury Goods', '1402.3M€', '10.59 %', 'orange'],
    ['Healthcare & Pharma', 'Pharmaceuticals, Biotechnology & Life Sciences', '1312.1M€', '10.06 %', 'orange'],
    ['Consumer Goods', 'Agriculture', '1203.5M€', '9.86 %', 'yellow'],
    ['Consumer Goods', 'Food & Beverage', '1165.9M€', '9.46 %', 'yellow'],
    ['Hospitality', 'Accommodation', '1019.5M€', '9.27 %', 'yellow'],
    ['Automotive & Industrials', 'Chemicals', '977.9M€', '9.09 %', 'yellow'],
    ['Retail and Luxury', 'Leisure Products', '870.4M€', '8.63 %', 'yellow'],
    ['Consumer Goods', 'Non Durable Household Products', '789.8M€', '8.20 %', 'yellow'],
    ['Telecom, Media and Technology', 'Media', '789.8M€', '7.87 %', 'yellow'],
    ['Automotive & Industrials', 'Aerospace & Defense', '773.7M€', '7.64 %', 'yellow'],
    ['Retail and Luxury', 'Household Durables', '773.7M€', '7.33 %', 'yellow'],
    ['Energy and Basic Materials', 'Oil & Gas Equipment & Services', '727.0M€', '7.11 %', 'yellow']
  ];


  @Input() position: any = {};

  constructor(private router: Router) { }

  ngOnInit() { }

  goToDashboard(id) {
    this.router.navigate(['monitor/pno/pno-detail', id]);
  }
}
