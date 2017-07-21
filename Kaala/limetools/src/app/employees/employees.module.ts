import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';
import { employeesRouting } from "app/employees/employees.routing";

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesSectionComponent } from "app/employees/employees-section.component";
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from "app/shared/services/employees.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
    providers: [
        EmployeesService
    ],
})
export class EmployeesModule { }
