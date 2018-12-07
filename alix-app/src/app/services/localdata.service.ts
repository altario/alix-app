// angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {
  pageType: any = 'monitor';
  pageBrand: any = 'bnl';

  loginEmailValue: any = '';

  constructor() {}

  setInitData() {
    this.setLocalData(this.pageType, this.pageBrand);
  }

  setLocalData(pt, pb) {
    localStorage.setItem('pageType', pt);
    localStorage.setItem('pageBrand', pb);
  }

  checkValues(inputEmailValue) {
    this.loginEmailValue = inputEmailValue;

    if (this.loginEmailValue.includes('paolo@')) {
      this.pageType = 'underwriter';
      localStorage.setItem('pageType', this.pageType);
      // console.log('MONITOR:', this.pageType);
    }
    if (this.loginEmailValue.includes('daniel@')) {
      this.pageType = 'monitor';
      localStorage.setItem('pageType', this.pageType);
      // console.log('MONITOR:', this.pageType);
    }

    if (this.loginEmailValue.includes('@bnl')) {
      this.pageBrand = 'bnl';
      localStorage.setItem('pageBrand', 'bnl');
      // console.log('PAGE_BRAND: bnl');
    }
    if (this.loginEmailValue.includes('@bpm')) {
      this.pageBrand = 'bpm';
      localStorage.setItem('pageBrand', 'bpm');
      // console.log('PAGE_BRAND: bpm');
    }
    if (this.loginEmailValue.includes('@isp')) {
      this.pageBrand = 'isp';
      localStorage.setItem('pageBrand', 'isp');
      // console.log('PAGE_BRAND: isp');
    }

    return this.validateEmail(this.loginEmailValue);
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
