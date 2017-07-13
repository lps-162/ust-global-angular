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
}
