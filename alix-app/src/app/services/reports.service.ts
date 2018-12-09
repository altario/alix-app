import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsReportService {

  private reportSource = new BehaviorSubject<object>(null);
  data: any = this.reportSource.asObservable();

  constructor() { }

  update(obj: object) {
    this.reportSource.next(obj);
  }
}
