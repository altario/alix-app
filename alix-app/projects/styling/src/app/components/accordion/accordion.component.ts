// angular
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url)
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment)
          if (element) {
            element.scrollIntoView(true)
          }
        }
      }
    })
  }

  ngOnInit() {}
}
