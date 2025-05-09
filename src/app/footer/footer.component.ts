import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `
    <footer [ngStyle]="{ padding: '1rem' }">
      &copy; 2025 Sophie Wang. All rights reserved.
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
