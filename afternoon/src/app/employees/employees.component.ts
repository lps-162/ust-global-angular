import { Component } from '@angular/core';
import { Employee } from "app/shared/models/employee";

@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    title: string = 'List of Employees';

    numOfEmployess: number = 150;

    employee: Employee = {
        emp_no: 156,
        first_name: 'LP Shivan',
        last_name: 'Shambavan',
        city: 'Trivandrum',
        government_id: 'ADHAR909'
    };

    cityName: string = 'Bangalore';

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

    actors = ['Deepika', 'Dulqar', 'Rock Dwayne'];

    showEmployees() {
        
    }

    testCity() {
        console.log(this.cityName);
    }

}