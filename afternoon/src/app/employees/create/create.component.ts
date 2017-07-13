import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'create-employee',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newEmployee: Employee = new Employee();
  
  @Output() employeeCreated = new EventEmitter();
  
  createEmployee() {
    this.employeeCreated.emit(this.newEmployee);
    this.newEmployee = new Employee();
  }
}
