// import { Component, OnInit } from '@angular/core';
// import { Employee } from "app/shared/models/employee";
// import { EmployeesService } from "app/shared/services/employees.service";
// import { Router } from "@angular/router";
// import { FormGroup, FormControl, 
//   FormBuilder, Validators } from '@angular/forms'

// @Component({
//   selector: 'app-employees-create',
//   templateUrl: './employees-create.component.html',
//   styleUrls: ['./employees-create.component.css']
// })
// export class EmployeesCreateComponent implements OnInit {
//   newEmployee: Employee = new Employee();
//   successMessage = '';
//   firstNameError = '';
//   lastNameError = '';

//   createForm: FormGroup;
  
//    formErrors = {
//       emp_no: '',
//       first_name: '',
//       last_name: ''
//     };

//     validationMessages = {
//       emp_no: {
//         'required': 'Emp No is required',
//       },
//       first_name: {
//         'required': 'First name is required',
//         'minlength': 'First name should be of 3 characters',
//         'maxlength': 'First name should not exceed 6 characters'
//       },
//       last_name: {
//         'required': 'Last name is required',
//         'minlength': 'Last name should be of 3 characters',
//         'maxlength': 'Last name should not exceed 6 characters'
//       }
//     }


//   constructor(private service: EmployeesService,
//               private router: Router,
//               private fb: FormBuilder) { }

//   ngOnInit() {
//     this.buildForm();
//   }

//   buildForm() {
//     // this.createForm = new FormGroup({
//     //   emp_no: new FormControl(''),
//     //   first_name: new FormControl(''),
//     //   last_name: new FormControl('')
//     // });

//     this.createForm = this.fb.group({
//       emp_no: [''],
//       first_name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
//       last_name: ['', [Validators.minLength(3), Validators.maxLength(6)]]
//     });

    
//     //console.log(this.createForm);
//     //console.log(this.createForm.get('first_name').value);

//     this.createForm.valueChanges.subscribe(data => {
//       // this.firstNameError = '';
//       // this.lastNameError = '';

//       // let firstName = this.createForm.get('first_name');
//       // let lastName = this.createForm.get('last_name');

//       // if (firstName.dirty && firstName.invalid) {
//       //   if (firstName.errors['required'])
//       //     this.firstNameError = 'First name is required';
//       //   if (firstName.errors['minlength'])
//       //     this.firstNameError = 'First name should be of 3 characters';
//       //   if (firstName.errors['maxlength'])
//       //     this.firstNameError = 'First name should not exceed 6 characters';
//       // }

//       // if (lastName.dirty && lastName.invalid) {
//       //   this.lastNameError = 'Last name is required';
//       // }
//       for (let field in this.formErrors) {
//         this.formErrors[field] = '';
//         let input = this.createForm.get(field);

//         if (input.invalid && input.dirty) {
//           for (let err in input.errors) {
//             this.formErrors[field] = this.validationMessages[field][err];
//           }
//         }
//       }
//     });
//   }

//   createEmployee() {
//     console.log('Form submission happening');
//     this.service.createEmployee(this.newEmployee)
//         .subscribe(createdEmployee => {
//           console.log(createdEmployee);
//           this.successMessage = 'Employee Created with id : ' + createdEmployee.id;
//           //this.router.navigate(['/employees', createdEmployee.id])
//         });
//   }
// }
