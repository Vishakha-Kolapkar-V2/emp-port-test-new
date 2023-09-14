
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  personalInfo = {
    firstName: 'Vishakha',
    middleName: 'Chandrashekhar',
    lastName: 'Kolapkar',
    mobileNo: '9012902390',
    gender: 'Female',
    maritalStatus: 'Single'
  };
  personalInfoEditMode = false;
  educationalInfoEditMode = false;

  togglePersonalInfoEdit() {
    this.personalInfoEditMode = !this.personalInfoEditMode;
  }

  toggleEducationalInfoEdit() {
    this.educationalInfoEditMode = !this.educationalInfoEditMode;
  }
  savePersonalInfo() {
    
    console.log('Personal info saved:', this.personalInfo);
    this.togglePersonalInfoEdit();
  }

  saveEducationalInfo() {
   
    console.log('Educational info saved:', this.saveEducationalInfo);
    this.toggleEducationalInfoEdit();
  }
}