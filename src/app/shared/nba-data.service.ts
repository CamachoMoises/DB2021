import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataTeam } from './data-team';

@Injectable()
export class NbaDataService {
  constructor(private http: HttpClient) {}
  private urlAPI = 'https://free-nba.p.rapidapi.com/players';
  getAllPlayes(): Observable<any> {
    const options = {
      headers: new HttpHeaders().set(
        'x-rapidapi-key',
        'f430b1d990msh1cd469be337f2a0p11de27jsn147fadf6bdc0'
      ),
      params: new HttpParams()
        .set('page', 'string')
        .set('per_page', 'string')
        .set('search', 'string'),
    };

    return this.http.get<any>(this.urlAPI, options);
  }
}
