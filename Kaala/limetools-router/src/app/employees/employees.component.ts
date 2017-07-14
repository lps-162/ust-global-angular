import { Component } from '@angular/core';
import { Employee } from '../shared/models/employee';

@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
    
})
export class EmployeesComponent {
  
  title: string = 'List of Employees';
  numberOfEmployees: number = 100;

  myNumber: number = 199;
  myString: string;
  myBoolean: boolean;


  employee: Employee = {
    emp_no: 155,
    first_name: 'LP Shivan',
    last_name: 'Shambavan',
    city: 'Bangalore'
  };

  actors = ['Dulqar', 'Rock', 'Deepika'];

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

  cityName = 'Bangalore';

  constructor() { 
   
  }

  ngOnInit() {
  }

  submit() {
    console.log('Somebody clicked');
    console.log(this.cityName);
  }

}