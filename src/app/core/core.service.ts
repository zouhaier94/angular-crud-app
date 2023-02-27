import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string = 'OK') { // = 'ok' mean default value is ok
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }

}
