import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent {
  @Output() newEvent = new EventEmitter<boolean>();

  eventClick: boolean = false;

  sideToggle() {
    this.eventClick = !this.eventClick;
    this.newEvent.emit(this.eventClick);
  }
}
