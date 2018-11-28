import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class MockapiService {
    constructor(private http: HttpClient) {}

    public getJSON(jsonFile): Observable<any> {
        return this.http.get(`./assets/${jsonFile}.json`);
    }
}
