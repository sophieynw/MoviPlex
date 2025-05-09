import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  selectedMovieTitle!: string;
  booking!: Booking;
  bookingList: Booking[] = [];

  constructor() {}

  setTitle(title: string) {
    this.selectedMovieTitle = title;
  }
  getTitle(): string {
    return this.selectedMovieTitle;
  }
  setBooking(booking: Booking) {
    this.booking = booking;
  }
  getBooking(): Booking {
    return this.booking;
  }
  addBooking(booking: Booking) {
    this.bookingList.push(booking);
  }
  getBookingList(): Booking[] {
    return this.bookingList;
  }
}
