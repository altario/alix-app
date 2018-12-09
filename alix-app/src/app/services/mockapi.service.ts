import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { lists } from '../data/data';

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
    return combineLatest(this.getPortfolios(), this.getNotifications(), this.getPositions()).pipe(
      map(([portfolios, notifications, positions]) => {
        const notificationsHash = {};
        const positionsHash = {};

        for (let i = 0; i < notifications.length; i++) {
          notificationsHash[notifications[i].id] = notifications[i];
        }

        for (let i = 0; i < positions.length; i++) {
          positionsHash[positions[i].id] = positions[i];
        }

        for (let i = 0; i < portfolios.length; i++) {
          portfolios[i].notificationsData = [];
          portfolios[i].positionsData = [];
          // portfolios[i].positionsData = positions;

          for (let z = 0; z < portfolios[i].notificationIds.length; z++) {
            portfolios[i].notificationsData.push(notificationsHash[portfolios[i].notificationIds[z]]);
          }

          for (let z = 0; z < portfolios[i].positionsIds.length; z++) {
            portfolios[i].positionsData.push(positionsHash[portfolios[i].positionsIds[z]]);
          }
        }

        return portfolios;
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
          for (let z = 0; z < notifications[i].positionsIds.length; z++) {
            notifications[i].positions.push(positionsHash[notifications[i].positionsIds[z]]);
          }
        }

        return notifications;
      })
    );
  }

  public getPortfolioPopulated(id: string): Observable<any> {
    return combineLatest(this.getPortfolios(), this.getNotifications(), this.getPositions()).pipe(
      map(([portfolios, notifications, positions]) => {
        let portfolio = portfolios.filter(a => parseInt(a.id, 10) === parseInt(id, 10));

        if (!portfolio.length) {
          return null;
        }

        const notificationsHash = {};
        const positionsHash = {};

        for (let i = 0; i < notifications.length; i++) {
          notificationsHash[notifications[i].id] = notifications[i];
        }

        for (let i = 0; i < positions.length; i++) {
          positionsHash[positions[i].id] = positions[i];
        }

        portfolio = portfolio[0];

        portfolio.notificationsData = [];
        portfolio.positionsData = [];
        // portfolio.positionsData = positions;

        for (let z = 0; z < portfolio.notificationIds.length; z++) {
          portfolio.notificationsData.push(notificationsHash[portfolio.notificationIds[z]]);
        }

        for (let z = 0; z < portfolio.positionsIds.length; z++) {
          portfolio.positionsData.push(positionsHash[portfolio.positionsIds[z]]);
        }

        return portfolio;
      }),
      tap(console.log)
    );
  }

  public getNotificationPopulated(id: string): Observable<any> {
    return combineLatest(this.getNotifications(), this.getPositions()).pipe(
      map(([notifications, positions]) => {
        let notification = notifications.filter(a => parseInt(a.id, 10) === parseInt(id, 10));

        if (!notification.length) {
          return null;
        }

        // const notificationsHash = {};
        // const positionsHash = {};

        // for (let i = 0; i < notifications.length; i++) {
        //   notificationsHash[notifications[i].id] = notifications[i];
        // }

        // for (let i = 0; i < positions.length; i++) {
        //   positionsHash[positions[i].id] = positions[i];
        // }

        notification = notification[0];

        // notification.notificationsData = [];
        // notification.positionsData = [];
        // // notification.positionsData = positions;


        // for (let z = 0; z < notification.positionsIds.length; z++) {
        //   notification.positionsData.push(positionsHash[notification.positionsIds[z]]);
        // }

        return notification;
      }),
      tap(console.log)
    );
  }

}
