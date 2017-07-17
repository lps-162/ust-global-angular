import { Component, OnInit } from '@angular/core';
import { listOfMockEmployees } from "app/shared/mock-data/mock-employees";
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  gridData: Employee[] = listOfMockEmployees;

  constructor() { }

  ngOnInit() {
  }


}
