// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { LocaldataService } from '@services/localdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailValue: any  = '';
  loginEmailValue: any = '';
  canEnableSubmit = false;

  numberCount = 12;

  brands = [
    'bnl',
    'bpm',
    'isp',
    'alix'
  ];

  constructor(
    private router: Router,
    private localData: LocaldataService
  ) {}

  ngOnInit() {}

  count() {
    this.numberCount += 10;
  }

  onKey(inputEmailValue) {
    this.checkValues(inputEmailValue);
  }

  checkValues(inputEmailValue) {
    this.loginEmailValue = inputEmailValue;

    // page type
    if (this.loginEmailValue.includes('paolo@')) { this.localData.setPageType('underwriter'); }
    if (this.loginEmailValue.includes('daniel@')) { this.localData.setPageType('monitor'); }

    // page brand
    for (const brand of this.brands) {
      if (this.loginEmailValue.includes('@' + brand)) {
        this.localData.setPageBrand(brand);
      }
    }

    this.canEnableSubmit = this.validateEmail(this.loginEmailValue);
  }

  validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailRegEx = regex.test(email);
    if (emailRegEx) { this.localData.setPageEmail(email); }

    return emailRegEx;
  }

  public inputGoToPage(inputEmailValue) {
    if (this.validateEmail(this.loginEmailValue)) {
      this.goTo();
    }
  }

  public goTo() {
    this.router.navigate([this.localData.getPageType()]);
  }

}
