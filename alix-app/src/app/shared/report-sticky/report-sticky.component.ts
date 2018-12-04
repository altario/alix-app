import { Component, OnInit } from '@angular/core';
import { PositionsReportService } from '@app/services/positions-report.service';

@Component({
  selector: 'app-report-sticky',
  templateUrl: './report-sticky.component.html',
  styleUrls: ['./report-sticky.component.scss']
})
export class ReportStickyComponent implements OnInit {
  public counter = 0;

  constructor(private report: PositionsReportService) { }

  ngOnInit() {
    this.report.data.subscribe((data) => this.counter += data);
  }
}
