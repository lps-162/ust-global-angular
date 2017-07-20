import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {
  newEmployee: Employee = new Employee();
  
  constructor() { }

  ngOnInit() {
  }

  createEmployee() {
    console.log('Create Employee - talk to service');

  }
}
