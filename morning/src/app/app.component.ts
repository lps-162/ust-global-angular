import { Component } from '@angular/core';
import { Employee } from './shared/models/employee';
import { listOfEmployees } from './shared/mock-data/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  gridData: Employee[] = listOfEmployees;
  
   employeeFromAppComponent: Employee = {
    emp_no: 155,
    first_name: 'LP Shivan',
    last_name: 'Shambavan',
    city: 'Bangalore'
  };

  selectedEmployee: Employee;

  showEmployee(employee: Employee) {
    console.log(employee);
    this.selectedEmployee = employee;
  }

  chosenStyle = {
    active: false
  };

  themeObject = {
    blueTheme: true,
    pinkTheme: false,
    coloredFont: true
  };

  setBlueTheme() {
    this.themeObject.blueTheme = true;
    this.themeObject.pinkTheme = false;
  }

  setPinkTheme() {
    this.themeObject.pinkTheme = true;
    this.themeObject.blueTheme = false;
  }

  toggleTheme() {
    if (this.themeObject.blueTheme) {
      this.themeObject.pinkTheme = true;
      this.themeObject.blueTheme = false;
    } else {
      this.themeObject.blueTheme = true;
      this.themeObject.pinkTheme = false;
    }
  }
}
