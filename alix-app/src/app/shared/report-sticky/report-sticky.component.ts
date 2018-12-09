import { Component, OnInit, TemplateRef } from '@angular/core';
import { PositionsReportService } from '@app/services/reports.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-report-sticky',
  templateUrl: './report-sticky.component.html',
  styleUrls: ['./report-sticky.component.scss']
})
export class ReportStickyComponent implements OnInit {
  public counter = 0;
  public isOpen: boolean;
  public isMaximize: boolean;
  public todaysDate: Date;
  public reportList: Array<any> = [];
  public title: string;
  public commentText: string;
  public modalRef: BsModalRef;

  constructor(private report: PositionsReportService, private modalService: BsModalService) {}

  ngOnInit() {
    this.todaysDate = new Date();
    this.report.data.subscribe((data) => {
      if (data) {
        this.counter += 1;
        this.title = data.title;
        this.reportList.push(data);
        this.isOpen = true;
      }
    });

    console.log(this.isOpen);
  }

  openClose() {
    this.isOpen = !this.isOpen;
    this.isMaximize = false;
  }

  maximize() {
    this.isMaximize = !this.isMaximize;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalConfirm(): void {
    this.reportList[this.reportList.length - 1].comment = this.commentText;
    this.commentText = '';
    this.modalRef.hide();
  }

  modalDecline(): void {
    this.modalRef.hide();
  }
}
