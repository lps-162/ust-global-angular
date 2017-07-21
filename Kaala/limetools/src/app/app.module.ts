import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRouting } from 'app/app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeesModule } from "app/employees/employees.module";
import { LoginComponent } from './login/login.component';
import { AuthService } from "app/shared/services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmployeesModule,
    appRouting
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
