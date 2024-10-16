import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserApiService } from 'src/app/Service/user-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  discount: boolean = true;
  patternRequired = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  userName: any;

  constructor(private userService: UserApiService) {}

  hideDiscount() {
    this.discount = false;
  }

  // Validation for Login Part
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.patternRequired),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
  });

  submitLogin() {
    this.userService.getData().subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.signupemail === this.loginForm.value.email &&
          a.signuppassword === this.loginForm.value.password
        );
      });

      if (user) {
        this.userName = user.signupName;
        alert(`${this.userName } user login`);
        this.loginForm.reset();
      } else {
        alert('Something went wrong');
      }
    });
  }

  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }

  // Validation for SignUp Part

  signupForm = new FormGroup({
    signupName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    signupemail: new FormControl('', [
      Validators.required,
      Validators.pattern(this.patternRequired),
    ]),
    signuppassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
  });

  submitSignup() {
    const signUpValue = this.signupForm.value;

    this.userService.postData(signUpValue).subscribe(
      (res) => {
        this.userName = signUpValue.signupName;
        alert(`${this.userName} you have successfully login`);
        this.signupForm.reset();
        return res;
      },
      (err) => {
        alert('Something went wrong.Please signup again');
      }
    );
  }

  getControlSignUp(name: any): AbstractControl | null {
    return this.signupForm.get(name);
  }
}
