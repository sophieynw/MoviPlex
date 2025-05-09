import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment4';
  isSmallScreen = window.innerWidth < 1300;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setSmallScreen(window.innerWidth < 1300);
  }
  setSmallScreen(value: boolean) {
    this.isSmallScreen = value;
  }
}
