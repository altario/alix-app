import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { lists } from './data';

@Injectable({
    providedIn: 'root'
})
export class MockapiService {
  constructor(private http: HttpClient) {}

  public getJSON(jsonFile?): Observable<any> {
    // return this.http.get(`./assets/${jsonFile}.js`);
    return of(lists);
  }

  public getPositions(): Observable<any> {
    return this.getJSON().pipe(map(data => data.positionsList));
  }

  public getPortfolios(): Observable<any> {
    return this.getJSON().pipe(map(data => data.portfoliosList));
  }

  public getNotifications(): Observable<any> {
    return this.getJSON().pipe(map(data => data.notificationsList));
  }

  public getPortfoliosPopulated(): Observable<any> {
    return combineLatest(this.getPortfolios(), this.getNotifications()).pipe(
      map(([porfolios, notifications]) => {
        const notificationsHash = {};

        for (let i = 0; i < notifications.length; i++) {
          notificationsHash[notifications[i].id] = notifications[i];
        }

        for (let i = 0; i < porfolios.length; i++) {
          porfolios[i].notifications = [];
          for (let z = 0; z < porfolios[i].notificationIds.length; z++) {
            porfolios[i].notifications.push(notificationsHash[porfolios[i].notificationIds[z]]);
          }
        }

        return porfolios;
      }),
      tap(console.log)
    );
  }

  public getNotificationsPopulated(): Observable<any> {
    return combineLatest(this.getNotifications(), this.getPositions()).pipe(
      map(([notifications, positions]) => {
        const positionsHash = {};

        for (let i = 0; i < positions.length; i++) {
          positionsHash[positions[i].id] = positions[i];
        }

        for (let i = 0; i < notifications.length; i++) {
          notifications[i].positions = [];
          for (let z = 0; z < notifications[i].notificationIds.length; z++) {
            notifications[i].positions.push(positionsHash[notifications[i].notificationIds[z]]);
          }
        }

        return notifications;
      })
    );
  }

}
