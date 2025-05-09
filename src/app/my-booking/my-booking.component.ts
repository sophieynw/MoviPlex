import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-booking',
  imports: [CommonModule, MatCardModule],
  templateUrl: './my-booking.component.html',
  styleUrl: './my-booking.component.css',
})
export class MyBookingComponent {
  booking!: Booking;
  bookingList: Booking[] = [];
  constructor(private bookingService: BookingService) {}
  ngOnInit() {
    this.bookingList = this.bookingService.getBookingList();
  }
}
