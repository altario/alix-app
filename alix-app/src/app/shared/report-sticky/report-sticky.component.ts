import { Component, OnInit } from '@angular/core';
import { PortfolioReportService } from '@services/portfolio-report.service';

@Component({
  selector: 'app-report-sticky',
  templateUrl: './report-sticky.component.html',
  styleUrls: ['./report-sticky.component.scss']
})
export class ReportStickyComponent implements OnInit {
  public counter = 0;

  constructor(private report: PortfolioReportService) { }

  ngOnInit() {
    this.report.data.subscribe((data) => this.counter += data);
  }
}
