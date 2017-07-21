// import { Component, OnInit } from '@angular/core';
// import { Employee } from "app/shared/models/employee";
// import { EmployeesService } from "app/shared/services/employees.service";
// import { Router } from "@angular/router";

// @Component({
//   selector: 'app-employees-create',
//   templateUrl: './employees-create.component.html',
//   styleUrls: ['./employees-create.component.css']
// })
// export class EmployeesCreateComponent implements OnInit {
//   newEmployee: Employee = new Employee();
//   successMessage;

//   constructor(private service: EmployeesService, 
//               private router: Router) { }

//   ngOnInit() {
//   }

//   createEmployee() {
//     console.log('Create Employee - talk to service');
//     console.log(this.newEmployee);
//     this.service.createEmployee(this.newEmployee)
//       .subscribe(employee => {
//         //this.router.navigate(['/employees', employee.id]);
//         this.successMessage = 'Employee Created Succesfully';
//       });
//   }
// }
