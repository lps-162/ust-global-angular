import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { listOfEmployees } from "app/shared/mock-data/employees";
import { Http } from "@angular/http";

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    const employeesUrl = 'http://localhost:3000/api/employees';
    this.http.get(employeesUrl).subscribe((response) => {
      console.log(response);
    });
  }

  gridData: Employee[] = listOfEmployees;
}
