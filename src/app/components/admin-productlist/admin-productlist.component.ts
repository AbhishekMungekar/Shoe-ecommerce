import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from 'src/app/Service/admin-api.service';

@Component({
  selector: 'app-admin-productlist',
  templateUrl: './admin-productlist.component.html',
  styleUrls: ['./admin-productlist.component.css'],
})
export class AdminProductlistComponent implements OnInit {
  products: any = [];
  pname: any = '';
  plabel: any = '';
  pprice: any = '';
  ptags: any = '';
  pimg: any = '';
  pdes: any = '';
  pbrand: any = '';

  constructor(
    private productsapi: AdminApiService,
    private route: Router,
    private active: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productsapi.getAllProduct().subscribe((data) => {
      this.products = data;
      console.log(this.products,' product List Data')
      const adidas=this.products.filter((filterData:any)=>{
        return filterData.pbrand.includes("Adidas");
      })
      const nike=this.products.filter((filterData:any)=>{
        return filterData.pbrand.includes("Nike");
      })
      
      console.log(adidas, 'Adidad')
      console.log(nike, 'Adidad')
    });
  }

  deleteProduct(id: any, name: any) {
    this.productsapi.deleteProduct(id).subscribe({
      next: (data) => {
        alert(`Your ${name} product has been deleted successfully.`);
        console.log(data);
        this.route.navigate(['/admin']); // Navigate after deletion
      },
      error: (err) => {
        alert(`Something went wrong while deleting ${name}.`);
        console.error('Error:', err); // Log the error for debugging
      },
    });
  }

  viewProduct(id: any) {
    this.productsapi.viewProduct(id).subscribe((data: any) => {
      (this.pname = data.pname),
        (this.pprice = data.pprice),
        (this.plabel = data.plabel),
        (this.ptags = data.ptags),
        (this.pimg = data.pimg),
        (this.pdes = data.pdes),
        (this.pbrand = data.pbrand);
    });
  }

  editbtn(id: any) {
    this.route.navigate([`/admin/edit-pro/${id}`]);
  }
}
