import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private currentRouteInfo: ActivatedRoute) { }

  employeeId;

  ngOnInit() {
    console.log('Employee Id : ', this.currentRouteInfo.snapshot.params['id']);
    this.employeeId = this.currentRouteInfo.snapshot.params['id'];
  }

}
