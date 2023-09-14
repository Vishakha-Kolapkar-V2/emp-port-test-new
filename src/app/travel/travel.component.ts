import { Component } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {
  departure: string = '';
  destination: string = '';
  departureDate: string = '';
  flightResults: string[] = [];

  searchFlights() {
    const searchQuery = `Searching flights from ${this.departure} to ${this.destination} on ${this.departureDate}`;
    this.flightResults.push(searchQuery);
    this.clearInputFields();
  }
  private clearInputFields() {
    this.departure = '';
    this.destination = '';
    this.departureDate = '';
  }
}
