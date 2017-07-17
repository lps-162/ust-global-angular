import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
  employeeId;

  constructor(private currentRouteStuffs: ActivatedRoute) { }

  ngOnInit() {
    this.employeeId = this.currentRouteStuffs.snapshot.params['id'];
  }

}
