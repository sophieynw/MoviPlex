import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../booking.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Booking } from '../booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  movieTitle!: string;
  theatres = [
    'Oakville MoviPlex',
    'Burlington MoviPlex',
    'Mississauga MoviPlex',
  ];
  showtimes = ['6:00PM', '8:30PM', '9:45PM'];
  bookingForm!: FormGroup;
  booking!: Booking;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {
    this.movieTitle = this.bookingService.getTitle();
    this.bookingForm = new FormGroup({
      theatre: new FormControl(this.theatres[0]),
      showtime: new FormControl(this.showtimes[0]),
      adult: new FormControl(1),
      child: new FormControl(0),
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
    });
  }
  onSubmit() {
    this.booking = {
      id: this.generateBookingId(),
      movieTitle: this.movieTitle,
      theatre: this.bookingForm.value.theatre,
      showtime: this.bookingForm.value.showtime,
      adult: this.bookingForm.value.adult,
      child: this.bookingForm.value.child,
      firstname: this.bookingForm.value.firstname,
      lastname: this.bookingForm.value.lastname,
      email: this.bookingForm.value.email,
    };
    this.bookingService.setBooking(this.booking);
    this.bookingService.addBooking(this.booking);
    this.router.navigate(['confirmation']);
  }
  generateBookingId(): string {
    return 'BK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}
