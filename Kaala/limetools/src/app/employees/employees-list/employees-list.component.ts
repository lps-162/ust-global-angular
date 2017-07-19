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

  constructor(private service: EmployeesService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(response => this.gridData = response.json());
  }

  gridData: Employee[];
}
