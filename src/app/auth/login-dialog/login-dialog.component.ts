import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {FormControl, NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<LoginDialogComponent>) {
  }

  ngOnInit() {
  }

  login(f) {
    this.dialogRef.close({
      loginType: 'login',
      data: f.value
    });
  }

  signup(f) {
    this.dialogRef.close({
      loginType: 'signup',
      data: f.value
    });
  }

  cancel(f) {
    this.dialogRef.close();
  }

  passwordsMatch(form) {
    if (!form.form.controls.password || !form.form.controls.confirmPassword) {
      return false;
    }
    let isPasswordsMatch = form.form.controls.password.value === form.form.controls.confirmPassword.value;
    //checking sirty might be removed from here, I think
    let areControlsDirty = form.form.controls.password.dirty && form.form.controls.confirmPassword.dirty;
    return areControlsDirty && isPasswordsMatch;
  }

  errorStatePasswordsMatcher(control: FormControl, form: NgForm): boolean {
    if (!form.form.controls.password || !form.form.controls.confirmPassword) {
      return false;
    }

    let areControlsDirty = form.form.controls.password.dirty && form.form.controls.confirmPassword.dirty;
    if (!areControlsDirty) {
      return false;
    }
    let isPasswordsMatch = form.form.controls.password.value === form.form.controls.confirmPassword.value;
    return !isPasswordsMatch;
  }
}
