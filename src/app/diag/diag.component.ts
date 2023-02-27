import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-diag',
  templateUrl: './diag.component.html',
  styleUrls: ['./diag.component.scss'],
})
export class DiagComponent {
  constructor(
    public dialogRef: MatDialogRef<DiagComponent>, private _empService: EmployeeService, private _coreService: CoreService) { }

  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        // alert('Employee deleted!')
        this._coreService.openSnackBar('Employee deleted!', 'Done');
      },
      error: console.log
    })
  }
}


