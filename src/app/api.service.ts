import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private serverUrl =  'https://eyenight-dev.herokuapp.com/parse';
  private appId = '1TcAvt0wD6YDxEffIJ7qJtRQvMXzu7';
  private clientKey = '${XUNfi612hLNdS6V8TTb582YTou8qSX}';
  private httpHeaders = {
    headers: new HttpHeaders({
      'X-Parse-Application-Id': this.appId,
      'X-Parse-REST-API-Key': this.clientKey,
      'X-Parse-Revocable-Session': '1',
      'Content-Type': 'application/json'
    })
  };

  constructor(private  http:  HttpClient) {}

  register(email, password) {
    const data = {
      'username': email,
      'password': password
    };
    this.http.post(this.serverUrl + '/users', data, this.httpHeaders)
      .subscribe(
        response => {
        console.log(response);
      },
        error => {
        console.log("Rrror", error);
      }
    );
  }

  login(email, password) {
    const data = {
      'username': email,
      'password': password,
      'granttype': password
    };
    this.http.post(this.serverUrl + '/login', data, this.httpHeaders)
      .subscribe(
        response => {
        console.log(response);
      },
        error => {
        console.log("Rrror", error);
      }
    );
  }

  getUsers(email, password) {
    this.http.get(this.serverUrl, this.httpHeaders)
      .subscribe(
        response => {
        console.log(response);
      },
        error => {
        console.log("Rrror", error);
      }
    );
  }
}
