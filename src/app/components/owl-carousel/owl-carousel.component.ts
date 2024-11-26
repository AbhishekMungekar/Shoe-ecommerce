import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { AdminApiService } from 'src/app/Service/admin-api.service';
import { ShoesDataService } from 'src/app/Service/shoes-data.service';
import { UserApiService } from 'src/app/Service/user-api.service';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css'],
})
export class OwlCarouselComponent implements OnInit {
  constructor(
    public shoesData: ShoesDataService,
    private adminApi: AdminApiService,
    public userApi: UserApiService
  ) {}

  wishListArray: any = [];
  hideWishList = false;
  userid: any;
  // Carousel Data Array
  allProducts: any = [];
  adidas: any = [];
  nike: any = [];
  newBalance: any = [];

  adi: boolean = true;
  nik: boolean = false;
  nb: boolean = false;

  ngOnInit(): void {
    this.adminApi.getAllProduct().subscribe((value) => {
      this.allProducts = value;
      console.log(this.allProducts);

      const adidas = this.allProducts.filter((adidasFilter: any) => {
        return adidasFilter.pbrand.includes('Adidas');
      });

      const nike = this.allProducts.filter((nikeFilter: any) => {
        return nikeFilter.pbrand.includes('Nike');
      });

      const nb = this.allProducts.filter((nikeFilter: any) => {
        return nikeFilter.pbrand.includes('Newbalance');
      });

      this.adidas = adidas;
      this.nike = nike;
      this.newBalance = nb;
    });

    const userData = this.userApi.localUserStored(); // Method to fetch localStorage data
    if (userData) {
      this.userid = userData.id;
    }
  }

  adidasSection() {
    this.adi = true;
    this.nik = false;
    this.nb = false;
  }
  nikeSection() {
    this.adi = false;
    this.nik = true;
    this.nb = false;
  }
  nbSection() {
    this.adi = false;
    this.nik = false;
    this.nb = true;
  }

  wishlist(data: any) {
    const loggedInUser = localStorage.getItem('loginUser');
  
    if (loggedInUser) {
      // User is logged in: Add to server-side wishlist
      this.adminApi.viewProduct(data.id).subscribe((val: any) => {
        const wishlistItem = { ...val, userId: this.userid }; // Add user ID to the product
        this.userApi.postWishList(wishlistItem).subscribe(() => {
        });
      });
    } else {
      // User is not logged in: Add to local storage wishlist
      const existingWishList = JSON.parse(localStorage.getItem('wishList') || '[]'); // Get current wishlist or initialize as empty array
      const updatedWishList = [...existingWishList, data]; // Append new product
      localStorage.setItem('wishList', JSON.stringify(updatedWishList)); // Save updated wishlist to localStorage
    }
  }
  
  // wishlist(data: any) {
  //   if (localStorage.getItem('loginUser')) {
  //     this.adminApi.viewProduct(data.id).subscribe((val: any) => {
  //       // const data = this.wishListArray.push([...val, this.userid]);
  //       const data = { ...val, userId: this.userid };
  //       this.userApi.postWishList(data).subscribe((val: any) => {
  //         alert('Product added to wishlist');
  //       });
  //     });
  //   } else {
  //     if (localStorage.getItem('wishList')?.length) {
  //       let wishListData = JSON.parse(localStorage.getItem('wishList')!);
  //       localStorage.setItem(
  //         'wishList',
  //         JSON.stringify([...wishListData, data])
  //       );
  //     } else {
  //       localStorage.setItem('wishList', JSON.stringify(data));
  //     }
  //   }
  // }
}
