import { Component } from '@angular/core';
import { AdminApiService } from 'src/app/Service/admin-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  sideNavStatus: boolean = false;

  allAdmin: any[] = [];
  allProudcts: any = [];
  constructor(private adminApi: AdminApiService) {}
  ngOnInit(): void {
    this.adminApi.getAdmin().subscribe((data: any) => {
      this.allAdmin = data;
      console.log(data);
    });
    this.adminApi.getAllProduct().subscribe((data: any) => {
      this.allProudcts = data;
    });
  }
}
