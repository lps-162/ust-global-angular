import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  title: string = 'Selected Employee Details ';
  @Input() employee;

  constructor() { }

  ngOnInit() {
  }

}
