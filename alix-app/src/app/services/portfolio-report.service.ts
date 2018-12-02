import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioReportService {

  private reportSource = new BehaviorSubject<number>(0);
  data: any = this.reportSource.asObservable();

  constructor() { }

  update(num: number) {
    this.reportSource.next(num);
  }
}
