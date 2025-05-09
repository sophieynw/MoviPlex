import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  action!: Movie[];
  thriller!: Movie[];

  constructor(
    private movieService: MovieService,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLocal();
  }

  getLocal() {
    let url = 'data/movies.json';
    this.movieService.getLocal().subscribe((res) => {
      this.action = res.action;
      this.thriller = res.thriller;
    });
  }

  bookMovie(title: string) {
    this.bookingService.setTitle(title);
    this.router.navigate(['booking']);
  }
}
