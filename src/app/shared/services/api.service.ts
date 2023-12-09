import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllData(): Observable<any>{
    return this._http.get('https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126')
      .pipe(
        pluck('dashboardData')
      )
  }
}
