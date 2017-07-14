import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: string;

  constructor(private currentRouteStuffs: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    console.log('Employee id : ' , this.currentRouteStuffs.snapshot.params['id']);
    this.employeeId =  this.currentRouteStuffs.snapshot.params['id'];
  }

  goBack() {
    console.log('Going back to list page');
    this.router.navigate(['/employees']);
  }
}
