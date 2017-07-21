import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {
  newEmployee: Employee = new Employee();
  successMessage;

  createForm: FormGroup;

  constructor(private service: EmployeesService, 
              private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.createForm = new FormGroup({
      emp_no: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
    });

    console.log(this.createForm.value);

    let firstNameControl = this.createForm.get('first_name');
    console.log(firstNameControl.valid && firstNameControl.touched);


    this.createForm.valueChanges
      .subscribe(data => console.log(data));

    
  }

  createEmployee() {
    console.log('Create Employee - talk to service');
    console.log(this.newEmployee);
    this.service.createEmployee(this.newEmployee)
      .subscribe(employee => {
        //this.router.navigate(['/employees', employee.id]);
        this.successMessage = 'Employee Created Succesfully';
      });
  }
}
