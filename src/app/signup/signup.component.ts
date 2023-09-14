
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  employee = {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    cname: '',
    dname: '',
    gender: '',
    city: {
      mumbai: false,
      pune: false,
      other: false,
    },
    description: '',
    selectedDesignation: '',
    date: ''
  };

  activeUserArray: any[] = [];

  constructor(private http: HttpClient) { }

  SignUp(form: NgForm) {
    const newUser = { ...this.employee };
    this.activeUserArray.push(newUser);
    this.http.post('http://localhost:3000/employee', this.employee)
      .subscribe((response: any) => {
      });

    this.employee = {
      date:'',
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      dname: '',
      cname: '',
      gender: '',
      city: {
        mumbai: false,
        pune: false,
        other: false,
      },
      description: '',
      selectedDesignation: '',
    };
    form.resetForm();
  }
}
