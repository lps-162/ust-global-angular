import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";


@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  private handleError(err) {
    return Observable.throw('Internal Server Error ' + err.status);
  }

  getEmployees() {
    return this.http.get(this.employeesUrl)
      .map(serverResponse => serverResponse.json())
      .do(response => console.log('Do operation', response))
      .catch(this.handleError);
  }

  getEmployeeDetails(id) {
    const fetchUrl = `${this.employeesUrl}/${id}`;
    console.log(fetchUrl);

    return this.http.get(fetchUrl)
      .map(serverResponse => serverResponse.json())
      .catch(this.handleError);
  }

  createEmployee(newEmployee) {
    return this.http.post(this.employeesUrl, newEmployee)
    .map(serverResponse => serverResponse.json())
    .catch(this.handleError);
  }

}
