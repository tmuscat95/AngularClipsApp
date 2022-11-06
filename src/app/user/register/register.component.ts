import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  showAlert = false;
  alertMsg = 'Please Wait. Account being created.';
  alertColor = 'blue';

  constructor() {}

  ngOnInit(): void {}

  register() {
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'Please Wait. Account being created.';
  }

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]) /*can be overriden with minLength html5 property directly on html input element*/,
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(16),
      Validators.max(130),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      ),
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
      //Validators.minLength(6),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(13),
      Validators.minLength(13),
    ]),
  });
}
