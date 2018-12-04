import { Component, OnInit } from '@angular/core';
import { PositionsReportService } from '@app/services/positions-report.service';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.scss']
})
export class ReportSelectorComponent implements OnInit {
  public clicked = false;

  constructor(private report: PositionsReportService) { }

  ngOnInit() {
  }

  updatePositionsReport(data) {
    this.clicked = true;

    this.report.update(data);
  }

}
