import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of, Observable, pipe } from 'rxjs';
import { catchError, tap, delay } from 'rxjs/operators';
import { Ranger } from '../interfaces/Ranger';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  apiUrl = environment.api;

  loggingPipe = pipe(tap(response => console.log(response)));

  constructor(private http: HttpClient) {}

  public get = <R>(url, options = {}): Observable<R> => {
    return this.http.get<R>(`${this.apiUrl}${url}`).pipe<R>(this.loggingPipe);
  };

  public rangers() {
    return this.get<Ranger[]>('/rangers');
  }

  public ranger(id: number) {
    return this.get<Ranger>(`/rangers/${id}`);
  }

  /**
   *
   *
   * @param {*} id
   * @param {*} [body={}]
   * @returns {Observable<Ranger>}
   * @memberof ApiService
   * delay is used to simulate real backend response time
   * and how the ui reacts to this kind of delay.
   */
  public updateRanger(id: any, body = {}): Observable<Ranger> {
    return this.http.put<Ranger>(`${this.apiUrl}/rangers/${id}`, body).pipe(delay(200));
  }
}
