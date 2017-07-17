import { EmployeesListComponent } from "app/employees/employees-list/employees-list.component";
import { EmployeesCreateComponent } from "app/employees/employees-create/employees-create.component";
import { EmployeeDetailsComponent } from "app/employees/employee-details/employee-details.component";
import { EmployeesEditComponent } from "app/employees/employees-edit/employees-edit.component";

export const subsetOfRoutes = [
      {
        path: 'employees',
        component: EmployeesListComponent
      },
       {
        path: 'employees/create',
        component: EmployeesCreateComponent
      },
       {
        path: 'employees/:id',
        component: EmployeeDetailsComponent
      },
      {
        path: 'employees/:id/edit',
        component: EmployeesEditComponent
      }
    ];