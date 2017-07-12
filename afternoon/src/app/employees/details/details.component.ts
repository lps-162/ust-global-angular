import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title = 'Selected Employee Details';

  @Input() employee: Employee;
    
  constructor() { }

  ngOnInit() {
  }

}
