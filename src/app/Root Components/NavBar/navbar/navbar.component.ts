import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  loginCheck!: boolean;
  logOutCheck!: boolean;

  constructor(){

  }
  ngOnInit(): void {
    this.LoginAndLogOut();
  }

  LoginAndLogOut(): void{
    const token = localStorage.getItem("jwt");
    if(token){
      this.loginCheck = false;
      this.logOutCheck = true;
    }else{
      this.loginCheck = true;
      this.logOutCheck = false;
    }
  }

  isUserAuthenticated(){

    const token = localStorage.getItem("jwt");
    if(token){
      return true;
    }else{
      return false;
    }
    
  }

  logOut(){
    localStorage.removeItem("jwt");
  }
}
