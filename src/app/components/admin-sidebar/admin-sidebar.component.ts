import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent {
  @Input() sidenavbar: Boolean = false;

  navList: any[] = [
    { id: 1, itag: 'fa-solid fa-home', title: 'Home' },
    {
      id: 2,
      itag: 'fa-solid fa-book-open',
      title: 'Product add',
      routerlink: 'product-add',
    },
    {
      id: 3,
      itag: 'fa-solid fa-box-open',
      title: 'Product list',
      routerlink: 'product-list',
    },
  ];

  // navList: any[] = [
  //   { id: 1, itag: 'fa-solid fa-home', title: 'Home', routerlink: '/' }, // Link to Home
  //   {
  //     id: 2,
  //     itag: 'fa-solid fa-book-open',
  //     title: 'Product Add',
  //     routerlink: 'product-add', // Ensure this is updated
  //   },
  //   {
  //     id: 3,
  //     itag: 'fa-solid fa-box-open',
  //     title: 'Product List',
  //     routerlink: 'product-list', // Ensure this is updated
  //   },
  // ];
}
