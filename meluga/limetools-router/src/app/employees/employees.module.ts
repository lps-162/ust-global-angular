import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesSectionComponent } from "app/employees/employees-section.component";
import { employeesRouting } from "app/employees/employees.routing";


@NgModule({
  imports: [
    CommonModule,
    employeesRouting
  ],
  declarations: [
     EmployeesSectionComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeesCreateComponent,
    EmployeesEditComponent
  ]
})
export class EmployeesModule { }
