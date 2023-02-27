import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  Form: FormGroup;

  education: string[] = [
    'Abitur',
    'Bachelor',
    'Master',
    'PHP'
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {

    this.Form = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''

    });
  }

  ngOnInit(): void {
    this.Form.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.Form.valid) {

      if (this.data) {
        this._empService.updateEmployee(this.data.id, this.Form.value).subscribe({
          next: (val: any) => {
            //alert('Employee updated successfully');
            this._coreService.openSnackBar('Employee updated successfully');
            this._dialogRef.close(true); // passing true to (val)
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
      else {
        this._empService.addEmployee(this.Form.value).subscribe({
          next: (val: any) => {
            //alert('Employee added successfully');
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true); // passing true to (val)
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }

    }
  }
}
