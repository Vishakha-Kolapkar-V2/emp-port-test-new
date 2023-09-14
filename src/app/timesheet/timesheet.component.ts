import { Component } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent {
  entries: any[] = [];
  newEntry: any = {
    date: '',
    hours: 0,
    projectname: '',
    description: ''
  };

  addEntry() {
    this.entries.push({
      date: this.newEntry.date,
      hours: this.newEntry.hours,
      description: this.newEntry.description,
      projectname: this.newEntry.projectname
    });

    // Reset the form fields
    this.newEntry.date = '';
    this.newEntry.hours = 0;
    this.newEntry.description = '';
    this.newEntry.projectname = '';
  }
}
