import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from 'src/app/Service/admin-api.service';

@Component({
  selector: 'app-admin-editpro',
  templateUrl: './admin-editpro.component.html',
  styleUrls: ['./admin-editpro.component.css'],
})
export class AdminEditproComponent {
  productName: any = '';
  productId: any = '';
  constructor(
    private productapi: AdminApiService,
    private route: Router,
    private activeroute: ActivatedRoute,
    private productApi: AdminApiService
  ) {}

  ngOnInit() {
    const apiId = this.activeroute.snapshot.paramMap.get('id');
    this.productId = apiId;
    this.productApi.viewProduct(this.productId).subscribe((data: any) => {
      console.log(data.pdes);
      this.productEdit.patchValue({
        pname: data.pname,
        plabel: data.plabel,
        pprice: data.pprice,
        ptags: data.ptags,
        pdes: data.pdes,
        pimg: data.pimg,
        pbrand : data.pbrand
      });
    });
  }

  // product add form

  productEdit = new FormGroup({
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

  // productAddFun(data: any) {
  //   // const data = this.productAdd.value;
  //   // this.productName = data.pname;
  //   this.productapi.addProductData(data).subscribe((val) => {
  //     this.productName = data.pname;
  //     alert(`Your ${this.productName} has been added successfully`);
  //     this.route.navigate(['/admin/product-list']);
  //     this.productAdd.reset();
  //     return val;
  //   });
  // }
  productEditFun() {
    const formval = this.productEdit.value;
    this.productApi.editProduct(this.productId, formval).subscribe((data) => {
      this.route.navigate(['admin/product-list']);
    });
  }

  getAddName(name: any): AbstractControl | null {
    return this.productEdit.get(name);
  }
}
