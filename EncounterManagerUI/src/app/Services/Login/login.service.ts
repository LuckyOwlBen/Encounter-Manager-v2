import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {User} from '../../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

// Base API URL
const apiUrl = 'http://localhost:8080/EncounterManagerV2';

// Headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User> = null;
  public isLoggedIn = false;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // Login method
  login(data) {
    return this.http.post<User>(
      apiUrl + '/login', data, httpOptions)
      .pipe(map(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.isLoggedIn = true;
      this.currentUserSubject.next(user);
      return user;
    }));
  }
}