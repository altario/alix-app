import { Component, OnInit } from '@angular/core';
import { PositionsReportService } from '@app/services/positions-report.service';

@Component({
  selector: 'app-report-sticky',
  templateUrl: './report-sticky.component.html',
  styleUrls: ['./report-sticky.component.scss']
})
export class ReportStickyComponent implements OnInit {
  public counter = 0;
  public isOpen: boolean;

  constructor(private report: PositionsReportService) {
    console.log(this.isOpen)
  }

  ngOnInit() {
    this.report.data.subscribe((data) => {
      console.log(data)
      this.counter += data;
      this.isOpen = data ? true : false;
    });

    console.log(this.isOpen);
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
