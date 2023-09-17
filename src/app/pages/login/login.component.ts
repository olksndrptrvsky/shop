import { Component, inject } from '@angular/core';
import { LoginService } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private messages = {
    "loggedInAsUser": "Logged in as user",
    "loggedInAsAdmin": "Logged in as admin",
    "notLoggedIn": "Please log in to the system",
  }
  
  message!: string;

  loginService = inject(LoginService);

  constructor() {
    this.message = !this.loginService.isLoggedIn
      ? this.messages["notLoggedIn"]
      : this.loginService.isAdmin
          ? this.messages["loggedInAsAdmin"]
          : this.messages["loggedInAsUser"]
  }


  onLoginAsUser() {
    this.loginService.logInUser();
    this.message = this.messages["loggedInAsUser"];
  }
  
  onLoginAsAdmin() {
    this.loginService.logInAdmin();
    this.message = this.messages["loggedInAsAdmin"];
  }

  onLogOut() {
    this.loginService.logOut();
    this.message = this.messages["notLoggedIn"];
  }
}
