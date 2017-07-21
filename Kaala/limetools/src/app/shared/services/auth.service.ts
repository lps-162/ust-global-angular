import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  loginUser(credentials) {
    return this.http.post('/api/login', credentials)
        .map(response => response.json());
  }
}
