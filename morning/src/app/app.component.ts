import { Component } from '@angular/core';
import { Employee } from './shared/models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  listOfEmployees: Employee[] = [
    {
      emp_no: 1234,
      first_name: 'LP Shivan',
      last_name: 'Shambavan',
      city: 'Bangalore'
    },
    {
      emp_no: 1455,
      first_name: 'Kavitha',
      last_name: 'Lakshmi',
      city: 'Trivandrum'
    },
    {
      emp_no: 1678,
      first_name: 'LP Venkat',
      last_name: 'Sambhavan',
      city: 'Chennai'
    },
  ];

  
}
