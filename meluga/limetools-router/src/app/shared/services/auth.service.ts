import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class AuthService {
  loggedIn;

  constructor(private http: Http) { }

  loginUser(credentials) {
    return this.http.post('http://localhost:3000/api/login', credentials)
      .map(response => response.json())
       .subscribe(successResponse => {
          this.loggedIn = true;
      })
      //{ token: '9y32sadfasdhflasdfhasdfasdf' }
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
