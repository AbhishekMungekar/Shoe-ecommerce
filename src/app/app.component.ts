import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ShoesEcommerce';

  constructor() {}

  ngOnInit() {
    if (localStorage.getItem('userLogin') === null) {
      localStorage.setItem('userLogin', 'false');
    }
  }
}
