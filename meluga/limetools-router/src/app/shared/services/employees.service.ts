import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { Employee } from "app/shared/models/employee";


@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  private handleError(err) {
    return Observable.throw('Internal Server Error ' + err.status);
  }

  private formatEmployee(jsonResponse) {
    let employee = new Employee();
    employee.id = jsonResponse.id;
    employee.first_name = jsonResponse.first_name;
    employee.last_name = jsonResponse.last_name;
    employee.emp_no = jsonResponse.emp_no;
    employee.city = jsonResponse.city;
    employee.full_name = employee.first_name + ' ' + employee.last_name;

    return employee;
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get(this.employeesUrl)
      .map(serverResponse => serverResponse.json())
      .map(employees => employees.map(this.formatEmployee))
      .catch(this.handleError);
  }

  getEmployeeDetails(id) : Observable<Employee> {
    const fetchUrl = `${this.employeesUrl}/${id}`;
    console.log(fetchUrl);

    return this.http.get(fetchUrl)
      .map(serverResponse => serverResponse.json())
      .map(this.formatEmployee)
      .catch(this.handleError);
  }

  createEmployee(newEmployee) {
    return this.http.post(this.employeesUrl, newEmployee)
    .map(serverResponse => serverResponse.json())
    .catch(this.handleError);
  }

}
