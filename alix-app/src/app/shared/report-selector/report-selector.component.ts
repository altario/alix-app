// angular
import { Component, OnInit, Input } from '@angular/core';
import { PositionsReportService } from '@app/services/reports.service';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.scss']
})
export class ReportSelectorComponent implements OnInit {
  @Input() hasBg: any = false;
  @Input() title: string;

  public clicked = false;

  constructor(private report: PositionsReportService) {}

  ngOnInit() {
  }

  updatePositionsReport() {
    this.clicked = true;

    this.report.update({title: this.title});
  }
}
