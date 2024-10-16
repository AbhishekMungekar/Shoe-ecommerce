import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdminApiService } from 'src/app/Service/admin-api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  default: boolean = true;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  adminUser: any;
  // behaviour = new BehaviorSubject<boolean>(false);

  constructor(private adminapi: AdminApiService, private route: Router) {}

  login() {
    this.default = false;
  }
  signup() {
    this.default = true;
  }

  // Admin Signup

  signUpForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  adminSignupData() {
    const adminSignval = this.signUpForm.value;

    this.adminapi.postAdmin(adminSignval).subscribe(
      (res) => {
        this.adminUser = adminSignval.name;
        alert(`Admin ${this.adminUser} has signup successfully`);
        // this.behaviour.next(true);
        localStorage.setItem('userLogin', 'true');
        this.signUpForm.reset();
        this.route.navigate(['/admin']);
        return res;
      },
      (err) => {
        alert('Something went wrong');
        localStorage.setItem('userLogin', 'false');
      }
    );
  }
  getAdminSignup(name: any): AbstractControl | null {
    return this.signUpForm.get(name);
  }

  // Admin Login

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
  });

  adminLoginData() {
    const loginData = this.loginForm.value;
    this.adminapi.getAdmin().subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === loginData.email && a.password === loginData.password
          );
        });
        if (user) {
          alert(`Admin ${loginData.email} Login Successfully`);
          localStorage.setItem('userLogin', 'true');
          this.loginForm.reset();
          this.route.navigate(['/admin']);
        } else {
          alert('Something went wrong please login again');
        }
      },
      (err) => {
        console.log('Something wrong');
        localStorage.setItem('userLogin', 'false');
      }
    );
  }

  getAdminlogin(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }
}
