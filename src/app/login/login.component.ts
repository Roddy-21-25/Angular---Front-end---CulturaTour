import { Component } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { Route, Router } from '@angular/router';
import { AuthenticatedResponse } from '../Auth/AuthenticatedResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  EmailLogin: string = '';
  PasswordLogin: string = '';

  invalidLogin!: boolean;

  constructor(private apiService: ApiRequestService, private router: Router){}

  login(){
    this.apiService.login(this.EmailLogin, this.PasswordLogin).subscribe({
      next: (response: AuthenticatedResponse) => {
        const token = response.token;
        localStorage.setItem("jwt", token); 
        this.invalidLogin = false; 
        this.router.navigate(["/"]);
      }, error: (err: HttpErrorResponse) => this.invalidLogin = true
    })
  }

  GoHome(){
    this.router.navigate(["/"]);
  }

}
