import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ReportObj {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class PositionsReportService {

  private reportSource = new BehaviorSubject<object>(null);
  data: any = this.reportSource.asObservable();

  constructor() { }

  update(obj: ReportObj) {
    console.log(obj)
    this.reportSource.next(obj.title === undefined ? {title: ''} : obj);
  }
}
