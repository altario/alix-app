import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsReportService {

  private reportSource = new BehaviorSubject<number>(null);
  data: any = this.reportSource.asObservable();

  constructor() { }

  update(num: number) {
    this.reportSource.next(num);
  }
}
