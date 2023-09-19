import { Component } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  nombre: string = '';
  apellido: string = '';
  emailSignUp: string = '';
  passwordSignUp: string = '';

  constructor(private apiService: ApiRequestService, private router: Router){}

  signUp(){
    this.apiService.signUp(this.nombre, this.apellido, this.emailSignUp, this.passwordSignUp).subscribe({
      next: (response: boolean) => {
        if(response){
        this.router.navigate(["login"]);
        }else{
          console.log("there is a error");
        }
      } , error: (err: HttpErrorResponse) => console.log(err)
    })
  }

  GoHome(){
    this.router.navigate(["/"]);
  }
}
