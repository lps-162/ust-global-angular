import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {
  newEmployee: Employee = new Employee();
  successMessage = '';
  firstNameError = '';
  lastNameError = '';

  createForm: FormGroup;
  
  constructor(private service: EmployeesService,
              private router: Router) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      emp_no: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl('')
    });

    //console.log(this.createForm);
    //console.log(this.createForm.get('first_name').value);

    this.createForm.valueChanges.subscribe(data => {
      this.firstNameError = '';
      this.lastNameError = '';

      let firstName = this.createForm.get('first_name');
      let lastName = this.createForm.get('last_name');

      if (firstName.dirty && firstName.invalid) {
        this.firstNameError = 'First name is required';
      }

      if (lastName.dirty && lastName.invalid) {
        this.lastNameError = 'Last name is required';
      }
    });
  }

  createEmployee() {
    console.log('Form submission happening');
    this.service.createEmployee(this.newEmployee)
        .subscribe(createdEmployee => {
          console.log(createdEmployee);
          this.successMessage = 'Employee Created with id : ' + createdEmployee.id;
          //this.router.navigate(['/employees', createdEmployee.id])
        });
  }
}
