import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
  }

}
