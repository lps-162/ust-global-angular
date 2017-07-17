import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { appRouting } from "app/app.routing";

import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeesCreateComponent } from './employees/employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees/employees-edit/employees-edit.component';
import { EmployeesSectionComponent } from "app/employees/employees-section.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,

  EmployeesSectionComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeesCreateComponent,
    EmployeesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
