import { Component } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { listOfMockEmployees } from './shared/mock-data/mock-employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super cool apps with Angular and Node.js';

  employeeFromAppComponent: Employee = {
    emp_no: 156,
    first_name: 'LP Shivan',
    last_name: 'Shambavan',
    city: 'Delhi'
  };

  selectedEmployee: Employee;

    gridData: Employee[] = listOfMockEmployees;

    showEmployeeDetails(employee: Employee) {
        console.log(employee);
        this.selectedEmployee = employee;
    }

    themeObject = {
      redTheme: false,
      blueTheme: true,
      boldFontStyle: true
    };

    toggleTheme() {
      if (this.themeObject.redTheme) {
        this.themeObject.blueTheme = true;
        this.themeObject.redTheme = false;
      } else {
        this.themeObject.blueTheme = false;
        this.themeObject.redTheme = true;
      }
    }
}
