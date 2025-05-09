import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupMessageComponent } from './popup-message/popup-message.component';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  message: string = 'Your message has been sent.';
  constructor(public dialog: MatDialog) {}
  displayMessage() {
    const dialogRef = this.dialog.open(PopupMessageComponent, {
      data: this.message,
      width: '400px',
    });
    return this.message;
  }
}
