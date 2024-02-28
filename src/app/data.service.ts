import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTop200Data(): Observable<any[]> {
    const apiUrl = 'http://localhost:3000/leaderboard';
    return this.http.get<any[]>(apiUrl);
  }
  getTop200DataCountry(country: string): Observable<any[]> {
    const apiUrl = 'http://localhost:3000/leaderboard/' + country;
    console.log(apiUrl);
    return this.http.get<any[]>(apiUrl);
  }
  getRankUid(userID: string) : Observable<{rank:number}> {
    const apiUrl = 'http://localhost:3000/user/' + userID;
    console.log(apiUrl);
    return this.http.get<{rank:number}>(apiUrl);
  }
}
