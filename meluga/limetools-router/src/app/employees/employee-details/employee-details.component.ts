import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from "app/shared/models/employee";
import { listOfMockEmployees } from '../../shared/mock-data/mock-employees';
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private currentRouteInfo: ActivatedRoute,
              private router: Router,
              private service: EmployeesService) { }

  employeeId: string;
  selectedEmployeeObject: Employee;
  
  ngOnInit() {
    console.log('Employee Id : ', this.currentRouteInfo.snapshot.params['id']);
    this.employeeId = this.currentRouteInfo.snapshot.params['id'];
    let empIdInteger = parseInt(this.employeeId);
    //this.selectedEmployeeObject = listOfMockEmployees.find(emp => emp.emp_no == empIdInteger);
    this.service.getEmployeeDetails(this.employeeId)
      .subscribe(employee => {
        console.log(employee);
        this.selectedEmployeeObject = employee;
      });
  }

  goBack() {
    this.router.navigate(['/employees']);
  }
}
