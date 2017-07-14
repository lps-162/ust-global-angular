import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { EmployeesComponent } from "app/employees/employees.component";
import { EmployeeDetailsComponent } from "app/employees/employee-details/employee-details.component";
import { NotFoundComponent } from "app/not-found/not-found.component";

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
    component: EmployeesComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting = RouterModule.forRoot(appRoutes);