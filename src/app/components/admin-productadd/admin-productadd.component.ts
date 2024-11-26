import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/Service/admin-api.service';

@Component({
  selector: 'app-admin-productadd',
  templateUrl: './admin-productadd.component.html',
  styleUrls: ['./admin-productadd.component.css'],
})
export class AdminProductaddComponent {
  productName: any = '';
  constructor(private productapi: AdminApiService, private route: Router) {}
  // product add form

  productAdd = new FormGroup({
    pname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    plabel: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    pprice: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(8),
    ]),
    ptags: new FormControl('', [Validators.required]),
    pimg: new FormControl('', [Validators.required]),
    pdes: new FormControl('', [
      Validators.required,
      Validators.minLength(30),
      Validators.maxLength(500),
    ]),
    pbrand: new FormControl('', [Validators.required]),
  });

  productAddFun(data: any) {
    // const data = this.productAdd.value;
    // this.productName = data.pname;
    // if (data.pbrand === 'Adidas') {
    //   console.log('Adidas');
    // } else if (data.pbrand === 'Nike') {
    //   console.log('Nike');
    // } else if (data.pbrand === 'Newbalance') {
    //   console.log('Newbalance');
    // } else {
    //   console.log('erroor occured');
    // }

    this.productapi.addProductData(data).subscribe((val) => {
      this.productName = data.pname;
      alert(`Your ${this.productName} has been added successfully`);
      this.route.navigate(['/admin/product-list']);
      this.productAdd.reset();
      return val;
    });
  }

  getAddName(name: any): AbstractControl | null {
    return this.productAdd.get(name);
  }
}
