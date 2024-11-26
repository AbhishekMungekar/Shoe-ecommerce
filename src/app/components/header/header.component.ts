import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/Service/user-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  discount: boolean = true;
  patternRequired = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  userName: any;
  userEmail: any;
  storedData: any;
  showPopupUser = false;
  loginUser: any;
  logOutBtn: any;

  constructor(private userService: UserApiService, private route: Router) {}

  ngOnInit() {
    const storedData = localStorage.getItem('loginUser');
    if (storedData) {
      const user = JSON.parse(storedData); // Convert the string back to an object
      this.userEmail = user.email; // Access the email
      this.loginUser = false;
    } else {
      this.userEmail = 'No user login yet'; // Access the email
      this.loginUser = true;
    }
  }

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
        // alert(`${this.userName} user login`);
        Swal.fire({
          title: this.userName,
          text: 'You have LOGIN successfully',
          icon: 'success',
        });
        this.loginForm.reset();
        const userValue = {
          id: user.id,
          email: user.signupemail,
        };
        localStorage.setItem('loginUser', JSON.stringify(userValue));
        this.userEmail = userValue.email;
        this.loginUser = false;
        // this.logOutBtn = true;
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
        this.userName = res.signupName;
        alert(`${this.userName} you have successfully login`);
        this.signupForm.reset();
        // const userValue = {
        //   id: res.id,
        //   email: res.signupemail,
        // };
        localStorage.setItem('loginUser', JSON.stringify(res));
        this.userEmail = res.email;
        this.loginUser = false;
        // return res;
      },
      (err) => {
        alert('Something went wrong.Please signup again');
      }
    );
  }

  getControlSignUp(name: any): AbstractControl | null {
    return this.signupForm.get(name);
  }

  togglePopup() {
    this.showPopupUser = !this.showPopupUser;
  }

  logoutUser() {
    localStorage.removeItem('loginUser');
    this.userEmail = 'No user Login yet';
    this.loginUser = true;
    // this.logOutBtn = false;
  }
}
