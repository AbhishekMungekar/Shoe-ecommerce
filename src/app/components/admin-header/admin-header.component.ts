import { Component, EventEmitter, Output } from '@angular/core';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent {
  @Output() newEvent = new EventEmitter<boolean>();
  constructor(private route: Router) {}

  eventClick: boolean = false;

  loginClick: boolean = false;

  sideToggle() {
    this.eventClick = !this.eventClick;
    this.newEvent.emit(this.eventClick);
  }

  loginClickToogle() {
    this.loginClick = !this.loginClick;
  }
  adminLogout() {
    const userConfirmed = confirm('Do you want to proceed?');
    if (userConfirmed) {
      localStorage.setItem('userLogin', 'false');
      this.route.navigate(['/']);
    } else {
      this.route.navigate(['/admin/admin-home']);
    }
  }     
}
