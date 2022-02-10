import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from './password.validator';

@Component({
  selector: 'app-new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.css']
})
export class NewPasswordFormComponent implements OnInit {
  form = new FormGroup({
    password: new FormControl('', null, PasswordValidation.CheckPassword()),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmNew: new FormControl(),
  }, PasswordValidation.CheckConfirm)

  get Password() {
    return this.form.get('password');
  }
  get NewPassword() {
    return this.form.get('newPassword');
  }
  get ConfirmNew() {
    return this.form.get('confirmNew');
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.Password?.setAsyncValidators(PasswordValidation.CheckPassword(this.NewPassword?.value))
  }

}
