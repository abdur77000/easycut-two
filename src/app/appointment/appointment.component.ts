import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  date!: Date;
  time!: string;
  day!: string;
  isAlreadyBooked: boolean = false;
  isInvalidDate: boolean = false;

  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  scheduleAppointment() {
    const selectedDateTime = new Date(this.date + 'T' + this.time);
    const now = new Date();

    // Check if selected date and time is within next 48 hours from now
    if (selectedDateTime.getTime() - now.getTime() > 48 * 60 * 60 * 1000) {
      this.isInvalidDate = true;
      return;
    }

    // Check if selected date and time is already booked
    if (this.isAlreadyBookedAppointment(selectedDateTime)) {
      this.isAlreadyBooked = true;
      return;
    }

    // This is where you would handle the form submission and schedule the appointment
    console.log(`Appointment scheduled for ${this.day}, ${this.date} at ${this.time}`);
  }

  isAlreadyBookedAppointment(selectedDateTime: Date): boolean {
    // Here you would check if the selected date and time is already booked
    // For example, you could make an HTTP request to your server to check if the time slot is available
    // For demonstration purposes, let's assume the time slot is already booked if the selectedDateTime is less than 24 hours from now
    const now = new Date();
    return selectedDateTime.getTime() - now.getTime() < 24 * 60 * 60 * 1000;
  }

  resetErrorFlags() {
    this.isAlreadyBooked = false;
    this.isInvalidDate = false;
  }
}

