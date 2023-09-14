import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ActiveuserComponent } from './activeuser/activeuser.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TravelComponent } from './travel/travel.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'navbar', component: NavbarComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'login/signup', component: SignupComponent
  },
  {
    path: 'login/dashboard', component: DashboardComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'personal', component: PersonalComponent
  },
  {
    path: 'professional', component: ProfessionalComponent
  },
  
  {
    path: 'activeuser', component: ActiveuserComponent
  },
  {
    path: 'attendance', component: AttendanceComponent
  },
  {
    path: 'leave', component: LeaveComponent  
  },
  {
    path: 'timesheet', component: TimesheetComponent
  },
  {
    path: 'travel', component: TravelComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
