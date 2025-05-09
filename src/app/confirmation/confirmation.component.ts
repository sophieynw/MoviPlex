import { Component } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmation',
  imports: [MatButtonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  booking!: Booking;
  constructor(private bookingService: BookingService, private router: Router) {}
  ngOnInit() {
    this.booking = this.bookingService.getBooking();
  }
  onOK() {
    this.router.navigate(['mybooking']);
  }
}
