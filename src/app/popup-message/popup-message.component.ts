import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-popup-message',
  imports: [
    MatDialogActions,
    MatDialogContent,
    CommonModule,
    MatButtonModule,
    MatDialogTitle,
  ],
  templateUrl: './popup-message.component.html',
  styleUrl: './popup-message.component.css',
})
export class PopupMessageComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactService>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onOK() {
    this.dialogRef.close();
  }
}
