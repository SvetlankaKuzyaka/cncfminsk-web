import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getRegistrationCardData(): Observable<any> {
    return this.http
      .get("/assets/data.json")
      .pipe(map(data => data["registrationCardData"]));
  }

  public getReviewEventData(): Observable<any> {
    return this.http.get("/assets/data.json").pipe(
      map(data => {
        const eventData = Object.values(data["eventData"]);
        return eventData.map(({ title, data }) => ({
          title,
          description: data[0].description,
          imageUrl: data[0].imageUrl
        }));
      })
    );
  }
}
