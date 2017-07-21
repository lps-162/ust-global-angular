import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { LoginComponent } from "app/login/login.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employees',
    loadChildren: 'app/employees/employees.module#EmployeesModule'
  },
  {
    path: 'login',
    component: LoginComponent
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

export const appRouting = RouterModule.forRoot(appRoutes);