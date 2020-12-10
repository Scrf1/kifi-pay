import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  notify(message: string): void {
    this._snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  notifyBlue(message: string): void {
    this._snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar']
    });
  }
  notifyGreen(message: string): void {
    this._snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['green-snackbar']
    });
  }
  notifyRed(message: string): void {
    this._snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['red-snackbar']
    });
  }
}
