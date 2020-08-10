import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.login('nombreUsuario');
  }
/*
  login() {
    const user = {email: this.email, password: this.password};
    this.loginService.login(user).subscribe( data => {
      console.log(data);
    });
  }
*/
}
