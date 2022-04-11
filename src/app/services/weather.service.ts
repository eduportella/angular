import { Injectable } from '@angular/core'
import { catchError, Observable, throwError } from 'rxjs'
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor (private http: HttpClient) {}

  getLocation (city: string): Observable<any> {
    return this.http
      .get(`http://www.metaweather.com/api/location/search/?query=${city}`)
      .pipe(catchError(this.handleError))
  }

  getTemperature (date: string, woeid: string): Observable<any> {
    return this.http
      .get(`https://www.metaweather.com/api/location/${woeid}/${date}`)
      .pipe(catchError(this.handleError))
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('error ocurred: ', error.error.message)
    } else {
      console.error(error)
    }
    return throwError(error)
  }
}
