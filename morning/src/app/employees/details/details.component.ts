import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  title: string = 'Selected Employee Details ';
  
  constructor() { }

  ngOnInit() {
  }

}
