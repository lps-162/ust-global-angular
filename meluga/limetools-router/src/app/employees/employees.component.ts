import { Component, OnInit } from '@angular/core';
import { listOfMockEmployees } from "app/shared/mock-data/mock-employees";
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  gridData: Employee[] = listOfMockEmployees;

  constructor() { }

  ngOnInit() {
  }


}
