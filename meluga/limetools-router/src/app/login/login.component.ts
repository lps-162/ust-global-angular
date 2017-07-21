import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submitCredentails() {
    this.authService.loginUser(this.credentials)
     
  }
}
