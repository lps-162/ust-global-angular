import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { Http } from "@angular/http";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  errorMessage;

  constructor(private service: EmployeesService) { }

  ngOnInit() {
    debugger;
    this.service.getEmployees()
      .subscribe(employees => {
        this.errorMessage = '';
        this.gridData = employees;
      },
      err => {
        this.errorMessage = err;
        console.log('From List Component : ', err)
      });
  }

  gridData: Employee[];
}
