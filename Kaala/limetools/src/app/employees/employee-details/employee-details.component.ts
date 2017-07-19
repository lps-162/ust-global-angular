import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from "app/shared/services/employees.service";
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;

  constructor(private currentRouteStuffs: ActivatedRoute, 
              private router: Router,
              private service: EmployeesService) { }

  ngOnInit() {
    console.log('Employee id : ' , this.currentRouteStuffs.snapshot.params['id']);
    const employeeId = this.currentRouteStuffs.snapshot.params['id'];

    this.service.getEmployeeDetails(employeeId)
      .subscribe(response => this.employee = response.json());
  }

  goBack() {
    console.log('Going back to list page');
    this.router.navigate(['/employees']);
  }
}
