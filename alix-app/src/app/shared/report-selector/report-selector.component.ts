import { Component, OnInit } from '@angular/core';
import { PortfolioReportService } from '@services/portfolio-report.service';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.scss']
})
export class ReportSelectorComponent implements OnInit {
  public clicked = false;

  constructor(private report: PortfolioReportService) { }

  ngOnInit() {
  }

  updatePortfolioReport(data) {
    this.clicked = true;

    this.report.update(data);
  }

}
