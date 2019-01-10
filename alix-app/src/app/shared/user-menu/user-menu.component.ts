// angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { LocaldataService } from '@app/services/localdata.service';

@Component({
  selector: 'app-user-menu',
  styleUrls: ['./user-menu.component.scss'],
  templateUrl: './user-menu.component.html'
})
export class UserMenuComponent implements OnInit {
  email = '';
  user = '';

  constructor(private router: Router, private localData: LocaldataService) {}

  ngOnInit() {
    this.email = this.localData.getPageEmail();

    if (this.localData.getPageEmail().includes('daniel@')) {
      this.user = 'daniel';
    } else if (this.localData.getPageEmail().includes('paolo@')) {
      this.user = 'paolo';
    } else if (this.localData.getPageEmail().includes('gianleone@')) {
      this.user = 'gianleone';
    } else {
      this.user = 'andre';
    }
  }

  public logout() {
    this.router.navigate(['./login']);
  }
}
