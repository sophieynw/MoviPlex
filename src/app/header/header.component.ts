import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatToolbarModule],
  template: `
    <mat-toolbar class="header">
      <img
        src="{{ isSmallScreen ? 'images/logo-s.png' : 'images/logo.png' }}"
        alt="movieplex logo"
        class="logo"
      />
      <span class="header-spacer"></span>
      <a routerLink="/home">
        <button mat-raised-button>
          {{ isSmallScreen ? '🏠' : 'Home' }}
        </button>
      </a>
      <a routerLink="/mybooking">
        <button mat-raised-button>
          {{ isSmallScreen ? '🎟️' : 'My Booking' }}
        </button>
      </a>
      <a routerLink="/contact">
        <button mat-raised-button>
          {{ isSmallScreen ? '📩' : 'Contact' }}
        </button>
      </a>
    </mat-toolbar>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSmallScreen = window.innerWidth < 600;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setSmallScreen(window.innerWidth < 600);
  }
  setSmallScreen(value: boolean) {
    this.isSmallScreen = value;
  }
}
