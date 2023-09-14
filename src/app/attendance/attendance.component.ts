import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  attendanceData = [
    { month: 'January', count: 65 },
    { month: 'February', count: 59 },
    { month: 'March', count: 80 },
    { month: 'April', count: 81 },
    { month: 'May', count: 56 },
    { month: 'June', count: 40 },
    { month: 'July', count: 55 },
    { month: 'Auguest', count: 100 },
    
  ];

  maxCount!: number;// Declare maxCount property here

  ngOnInit() {
    // Calculate the maximum attendance count
    this.maxCount = Math.max(...this.attendanceData.map((data) => data.count));
  }
}
