import { Routes, RouterModule } from "@angular/router";

import { EmployeesListComponent } from "app/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/employees/employee-details/employee-details.component";
import { EmployeesCreateComponent } from "app/employees/employees-create/employees-create.component";
import { EmployeesEditComponent } from "app/employees/employees-edit/employees-edit.component";
import { EmployeesSectionComponent } from "app/employees/employees-section.component";

const employeesRoutes: Routes = [
  {
    path: '',
    component: EmployeesSectionComponent,
    children: [
      {
        path: '',
        component: EmployeesListComponent
      },
      {
        path: 'create',
        component: EmployeesCreateComponent
      },
      {
        path: ':id',
        component: EmployeeDetailsComponent
      },
      {
        path: ':id/edit',
        component: EmployeesEditComponent
      },
    ]
  }
];

export const employeesRouting = RouterModule.forChild(employeesRoutes);