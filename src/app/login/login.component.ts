import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ='';
  email: string = '';
  password: string | undefined;

  constructor(private router:Router) { }
  LoginUser() {
    if(this.username && this.email && this.password)
    this.router.navigate(['login/dashboard']); 
  }
  ngOnInit() {
  }
}

