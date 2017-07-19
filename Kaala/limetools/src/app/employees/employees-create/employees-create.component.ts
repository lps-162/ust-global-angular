import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {
  newEmployee: Employee = {
    emp_no: 0,
    first_name: '',
    last_name: '',
    city: ''
  };
  
  constructor(private service: EmployeesService) { }

  ngOnInit() {
  }

  createEmployee() {
    this.service.createEmployee(this.newEmployee)
        .subscribe(createdEmployee => {
          console.log(createdEmployee);
        });
  }
}
