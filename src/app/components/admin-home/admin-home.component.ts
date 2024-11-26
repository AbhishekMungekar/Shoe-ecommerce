import { Component, OnInit } from '@angular/core';
import { AdminApiService } from 'src/app/Service/admin-api.service';
import { UserApiService } from 'src/app/Service/user-api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  allProudcts: any = [];
  allUSerData: any = [];
  constructor(
    private adminApi: AdminApiService,
    private userApi: UserApiService
  ) {}
  ngOnInit(): void {
    this.adminApi.getAllProduct().subscribe((data: any) => {
      this.allProudcts = data;
    });

    this.userApi.getData().subscribe((data: any) => {
      this.allUSerData = data;
    });
  }
}
