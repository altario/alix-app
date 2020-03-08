// angular
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

// ngx-bootstrap
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-npl-portfolio',
  templateUrl: './npl-portfolio.component.html',
  styleUrls: ['./npl-portfolio.component.scss']
})
export class NplPortfolioComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal--portfolio' })
    );
  }

  goToDetail() {
    this.router.navigateByUrl('/monitor/npl/portfolio-detail');
  }
}
