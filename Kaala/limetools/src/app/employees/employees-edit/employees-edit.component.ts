import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
  employeeId;
  newEmployee: Employee;
  successMessage;

  constructor(private currentRouteStuffs: ActivatedRoute,
              private service: EmployeesService) { }

  ngOnInit() {
    this.employeeId = this.currentRouteStuffs.snapshot.params['id'];
    this.service.getEmployeeDetails(this.employeeId)
        .subscribe(employee => this.newEmployee = employee);
  }


  updateEmployee() {
    this.service.updateEmployee(this.newEmployee)
        .subscribe(employee => this.successMessage = 'Employee Updated')
  }
}
