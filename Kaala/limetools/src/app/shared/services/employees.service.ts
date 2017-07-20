import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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

  private mapToEmployee(employee) {

  }

  getEmployees() : Observable<Employee[]> {
    return this.http.get(this.employeesUrl)
              .map(response => response.json())
              .map(response => response.map(this.formatEmployee))
              .do(response => console.log(response))
              .catch(this.handleError);

  }

  getEmployeeDetails(id): Observable<Employee> {
    console.log('Getting details');
    let localFetchUrl = this.employeesUrl + '/' + id;
    return this.http.get(localFetchUrl)
        .map(response => response.json())
        .map(this.formatEmployee)
        .catch(this.handleError);
  }

  private formatEmployee(jsonResult) {
    // let modifiedEmployee: Employee = {
    //   id: jsonResult.id,
    //   emp_no: jsonResult.emp_no,
    //   first_name: jsonResult.first_name,
    //   last_name: jsonResult.last_name,
    //   city: jsonResult.city,
    //   full_name: jsonResult.first_name + ' ' + jsonResult.last_name
    // };
    let modifiedEmployee: Employee = {
      ...jsonResult,
      full_name: jsonResult.first_name + ' ' + jsonResult.last_name
    };

    return modifiedEmployee;
  }

  createEmployee(newEmployee) {
    return this.http.post(this.employeesUrl, newEmployee)
            .map(response => response.json())
            .catch(this.handleError);
  }

  updateEmployee(employeeToBeUpdated) {
    const editUrl = `${this.employeesUrl}/${employeeToBeUpdated.id}`;

    return this.http.put(editUrl, employeeToBeUpdated)
            .map(response => response.json())
            .catch(this.handleError);
  }

  private handleError(err) {
    return Observable.throw('Internal Server Error');
  }

}
