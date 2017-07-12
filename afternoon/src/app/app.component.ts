import { Component } from '@angular/core';
import { Employee } from "app/shared/models/employee";

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

  listOfEmployees: Employee[] = [
        {
            emp_no: 156,
            first_name: 'LP Shivan',
            last_name: 'Shambavan',
            city: 'Trivandrum'
        },
        {
            emp_no: 178,
            first_name: 'Kavitha',
            last_name: 'Lakshmi',
            city: 'Los Angeles'
        },
        {
            emp_no: 201,
            first_name: 'Alexandra',
            last_name: 'Daddario',
            city: 'Tokyo'
        },
    ];
}
