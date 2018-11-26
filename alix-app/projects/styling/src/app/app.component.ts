// angular
import { Component } from '@angular/core'

// anim
import { fadeAnimation } from './animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {}
