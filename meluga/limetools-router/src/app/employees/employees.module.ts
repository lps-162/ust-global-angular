import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesSectionComponent } from "app/employees/employees-section.component";
import { employeesRouting } from "app/employees/employees.routing";
import { EmployeesService } from "app/shared/services/employees.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    employeesRouting
  ],
  declarations: [
     EmployeesSectionComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeesCreateComponent,
    EmployeesEditComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
