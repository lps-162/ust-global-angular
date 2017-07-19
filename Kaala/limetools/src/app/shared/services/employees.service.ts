import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {

  constructor() { }

  getEmployees() {
    console.log('I am a method in employees service');
  }

}
