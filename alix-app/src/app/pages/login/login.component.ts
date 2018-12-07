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
  emailValue = '';
  pageType = 'monitor';
  pageBrand = 'bnl';

  canEnableSubmit = false;

  constructor(
    private router: Router,
    private ld: LocaldataService
  ) {}

  ngOnInit() {}

  onKey(inputEmailValue) {
    this.canEnableSubmit = this.ld.checkValues(inputEmailValue);
    // console.log(this.canEnableSubmit);
  }

  checkValues(inputEmailValue) {
    this.canEnableSubmit = this.ld.checkValues(inputEmailValue);
  }

  public goTo(pageStr) {
    this.router.navigate([pageStr]);
  }

}
