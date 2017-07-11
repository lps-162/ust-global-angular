import { Component } from '@angular/core';

@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    title: string = 'List of Employees';

    numOfEmployess: number = 150;

    employee = {
        emp_no: 156,
        first_name: 'LP Shivan',
        last_name: 'Shambavan',
        cities: ['Trivandrum', 'Los Angeles', 'Tokyo']
    };

    cityName: string = 'Bangalore';

    listOfEmployees = [
        {
            emp_no: 156,
            first_name: 'LP Shivan',
            last_name: 'Shambavan'
        },
        {
            emp_no: 178,
            first_name: 'Kavitha',
            last_name: 'Lakshmi'
        },
        {
            emp_no: 201,
            first_name: 'Alexandra',
            last_name: 'Daddario'
        },
    ];

    actors = ['Deepika', 'Dulqar', 'Rock Dwayne'];

    showEmployees() {
        
    }

    testCity() {
        console.log(this.cityName);
    }

}