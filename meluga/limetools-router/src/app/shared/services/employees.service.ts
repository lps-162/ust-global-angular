import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  getEmployees() {
    return this.http.get(this.employeesUrl)
      .map(serverResponse => serverResponse.json());
  }

  getEmployeeDetails(id) {
    const fetchUrl = `${this.employeesUrl}/${id}`;
    console.log(fetchUrl);

    return this.http.get(fetchUrl)
      .map(serverResponse => serverResponse.json());
  }

  createEmployee() {

  }

}
