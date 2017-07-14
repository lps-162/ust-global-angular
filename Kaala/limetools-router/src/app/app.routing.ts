
import { HomeComponent } from 'app/home/home.component';
import { EmployeesComponent } from 'app/employees/employees.component';
import { AboutComponent } from 'app/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "app/not-found/not-found.component";
import { ModuleWithProviders } from '@angular/core';
import { EmployeeDetailsComponent } from "app/employees/employee-details/employee-details.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);