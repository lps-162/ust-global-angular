import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';
import { employeesRouting } from "app/employees/employees.routing";

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesSectionComponent } from "app/employees/employees-section.component";
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        employeesRouting
    ],
    exports: [],
    declarations: [
         EmployeesSectionComponent,
        EmployeesListComponent,
        EmployeeDetailsComponent,
        EmployeesCreateComponent,
        EmployeesEditComponent,
    ],
    providers: [],
})
export class EmployeesModule { }
