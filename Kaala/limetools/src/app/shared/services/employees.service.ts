import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from "rxjs/Observable";
import { Employee } from "app/shared/models/employee";

@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  private mapToEmployee(employee) {

  }

  getEmployees() : Observable<Employee[]> {
    return this.http.get(this.employeesUrl)
              .map(response => response.json())
              .catch(this.handleError);

  }

  getEmployeeDetails(id): Observable<Employee> {
    console.log('Getting details');
    let localFetchUrl = this.employeesUrl + '/' + id;
    return this.http.get(localFetchUrl)
        .map(response => response.json())
        .catch(this.handleError);
  }

  createEmployee(newEmployee) {
    return this.http.post(this.employeesUrl, newEmployee)
            .map(response => response.json())
            .catch(this.handleError);
  }

  private handleError(err) {
    return Observable.throw('Internal Server Error');
  }

}
