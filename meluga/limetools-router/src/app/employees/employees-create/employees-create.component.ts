import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {
  newEmployee: Employee = new Employee();
  successMessage;
  firstNameError;
 

  validationMessages = {
      emp_no: {
        'required': 'Emp No is required',
      },
      first_name: {
        'required': 'First name is required',
        'minlength': 'First name should be of 3 characters',
        'maxlength': 'First name should not exceed 6 characters'
      },
      last_name: {
        'required': 'Last name is required',
        'minlength': 'Last name should be of 3 characters',
        'maxlength': 'Last name should not exceed 6 characters'
      }
    };

  createForm: FormGroup;

  constructor(private service: EmployeesService, 
              private router: Router, 
              private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    
    this.createForm = this.fb.group({
      emp_no: [''],
      first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      last_name: ['', [Validators.required, Validators.minLength(5) ]]
    });  

    this.createForm.valueChanges
      .subscribe(data => this.validateForm());
    
  }
  
  formErrors = {
    'emp_no': '', 
    'first_name': '', 
    'last_name': ''
  };

  validateForm() {

    console.log('Validating');

    for (let field in this.formErrors) {
      console.log(field);
        this.formErrors[field] = '';
        let input = this.createForm.get(field);

        if (input.invalid && input.dirty) {
          for (let err in input.errors) {
            this.formErrors[field] = this.validationMessages[field][err];
            console.log('Generic error handling');
          }
        }
      }
  }

    onlyFirstNameValidation() {
        
        this.firstNameError = '';
        let firstNameControl = this.createForm.get('first_name');
        if (firstNameControl.invalid && firstNameControl.dirty) {
          console.log(firstNameControl.errors);
          if (firstNameControl.errors['minlength'])
            this.firstNameError = 'First name should be minimum 3 characters';
          if (firstNameControl.errors['maxlength'])
            this.firstNameError = 'First name cannot be more than 6 characters';
          if (firstNameControl.errors['required'])
            this.firstNameError = 'First name required';
        }
          
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
