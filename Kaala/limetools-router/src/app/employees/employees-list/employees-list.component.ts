import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { listOfEmployees } from "app/shared/mock-data/employees";

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gridData: Employee[] = listOfEmployees;
}
