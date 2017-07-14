import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { listOfEmployees } from "app/shared/mock-data/employees";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gridData: Employee[] = listOfEmployees;
}
