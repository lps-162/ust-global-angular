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
  successMessage = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
     localStorage.setItem('auth-token', 'MYVALUE');
  }

  submitCredentials() {
    console.log('Submitting Credentials');

   
  }

}
