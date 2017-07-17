
import { HomeComponent } from 'app/home/home.component';
import { EmployeesListComponent } from 'app/employees/employees-list/employees-list.component';
import { AboutComponent } from 'app/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "app/not-found/not-found.component";
import { ModuleWithProviders } from '@angular/core';

import { EmployeeDetailsComponent } from "app/employees/employee-details/employee-details.component";
import { EmployeesCreateComponent } from "app/employees/employees-create/employees-create.component";
import { EmployeesEditComponent } from "app/employees/employees-edit/employees-edit.component";
import { EmployeesSectionComponent } from "app/employees/employees-section.component";
//import { subsetOfRoutes } from './subset.routing';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
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
      }
    ]
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