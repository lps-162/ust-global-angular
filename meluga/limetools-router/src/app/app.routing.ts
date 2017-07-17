import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { EmployeesListComponent } from "app/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/employees/employee-details/employee-details.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { EmployeesCreateComponent } from "app/employees/employees-create/employees-create.component";
import { EmployeesEditComponent } from "app/employees/employees-edit/employees-edit.component";
import { EmployeesSectionComponent } from "app/employees/employees-section.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'employees',
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
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting = RouterModule.forRoot(appRoutes);