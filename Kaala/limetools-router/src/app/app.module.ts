import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRouting } from 'app/app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeesComponent,
    NavbarComponent,
    NotFoundComponent,
    EmployeeDetailsComponent
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
