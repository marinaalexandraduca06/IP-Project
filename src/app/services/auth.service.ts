import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators/catchError';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { tokenNotExpired } from 'angular2-jwt';

import { CONFIG } from '../../environments/environment';
import { UserModel } from '../models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  public authToken: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public user: BehaviorSubject<UserModel> = new BehaviorSubject(undefined);

  constructor(
    private http: HttpClient
  ) { }

  public loggedIn(): boolean {
    return tokenNotExpired('id_token');
  }

  public register(user: UserModel): Observable<UserModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(`${CONFIG.apiBase}/users/register`, user, httpOptions)
      .map((res) => res) as Observable<UserModel>;
  }

  public login(userData): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(`${CONFIG.apiBase}/users/login`, userData, httpOptions)
      .map((res) => {
        this.storeUserData(res['result'].token, res['result'].user);
      });
  }

  public storeUserData(token, user: UserModel): void {
    localStorage.setItem('id_token', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.authToken.next(token);
    this.user.next(new UserModel({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
    ));
  }

  public loadUserData(): any {
    this.authToken.next(localStorage.getItem('id_token'));
    const tempUser = JSON.parse(localStorage.getItem('currentUser'));
    if (tempUser) {
      this.user.next(new UserModel({
        id: tempUser.id,
        firstName: tempUser.firstName,
        lastName: tempUser.lastName,
        email: tempUser.email
      }
      ));
    }
  }

  public logout(): void {
    this.authToken.next(undefined);
    this.user.next(undefined);
    localStorage.clear();
  }

  // Basic error handling: to be improved later
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Invalid Input');
  }
}
