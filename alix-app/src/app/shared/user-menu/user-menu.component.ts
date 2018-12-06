// angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  styleUrls: ['./user-menu.component.scss'],
  templateUrl: './user-menu.component.html'
})
export class UserMenuComponent {
  constructor(private router: Router) {}

  public logout() {
    this.router.navigate(['./login']);
  }
}
