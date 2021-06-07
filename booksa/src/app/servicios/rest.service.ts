import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: {}
  };

// const address = 'http://34.72.43.0/'


@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private httpClient: HttpClient) { }

//   GetRequest(serverAddress: string): Observable<any> {
//     return this.httpClient.get<any>(address + serverAddress, {observe:'response'});
//   }

//   PostRequest(serverAddress: string, info: object): Observable<any> {
//     return this.httpClient.post<any>(address + serverAddress, info,{observe:'response'});
//   }

//   PutRequest(serverAddress: string, info: object): Observable<any> {
//     return this.httpClient.put<any>(address + serverAddress, info, {observe:'response'});
//   }

//   DeleteRequest(serverAddress: string): Observable<any> {
//     return this.httpClient.delete<any>(address + serverAddress, {observe:'response'}); 
//   }
}
