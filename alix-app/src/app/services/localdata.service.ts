// angular
import { Injectable } from '@angular/core';

// routes
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {
  pageType: any = 'monitor';
  pageBrand: any = 'alix';
  pageEmail: any = 'john@email.com';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public setInitData() {
    this.setLocalData(this.pageType, this.pageBrand, this.pageEmail);

    this.checkAddressUrl();
  }

  private setLocalData(pageType, pageBrand, pageEmail) {
    if (!this.getPageType()) { this.setPageType(pageType); }
    if (!this.getPageBrand()) { this.setPageBrand(pageBrand); }
    if (!this.getPageEmail()) { this.setPageEmail(pageEmail); }
  }

  public checkAddressUrl() {
    this.router.events.subscribe(event => {
      const routeUrl = (event as NavigationEnd).url;
      if (routeUrl) {
        if (routeUrl.includes('monitor')) { this.setPageType('monitor'); }
        if (routeUrl.includes('underwriter')) { this.setPageType('underwriter'); }
        if (routeUrl.includes('underwriter') && this.getPageEmail().includes('gianleone')) { this.setPageType('underwriter-g'); }
      }
    });
  }



  // SET --------------------

  public setPageType(pageType) {
    localStorage.setItem('pageType', pageType);
  }

  public setPageBrand(pageBrand) {
    localStorage.setItem('pageBrand', pageBrand);
  }

  public setPageEmail(pageEmail) {
    localStorage.setItem('pageEmail', pageEmail);
  }



  // GET --------------------

  public getPageType() {
    return localStorage.getItem('pageType');
  }

  public getPageBrand() {
    return localStorage.getItem('pageBrand');
  }

  public getPageEmail() {
    return localStorage.getItem('pageEmail');
  }
}
