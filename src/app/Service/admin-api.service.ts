import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminApiService {
  // wishlistArray: any = [];
  constructor(private http: HttpClient) {
    // const storedData = localStorage.getItem('wishlist');
  }

  postAdmin(data: any) {
    return this.http.post('http://localhost:3000/admin', data, {
      observe: 'response',
    });
  }

  getAdmin() {
    return this.http.get<any>('http://localhost:3000/admin');
  }

  // deleteAdmin() {
  //   return this.http.delete<any>('http://localhost:3000/admin');
  // }

  // Add Product store

  addProductData(data: any) {
    return this.http.post('http://localhost:3000/products', data);
  }
  getAllProduct() {
    return this.http.get('http://localhost:3000/products');
  }
  deleteProduct(id: any) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  viewProduct(id: any) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  editProduct(id: any, data: any) {
    return this.http.put(`http://localhost:3000/products/${id}`, data);
  }

  // WishList Store

  // addToWishList(data: any) {
  //   // if (this.wishlistArray.some((val: any) => val.id === data.id)) {
  //   //   this.wishlistArray.push(data);
  //   //   this.updateWishList();
  //   // }
  //   this.wishlistArray.push(data);
  //   this.updateWishList();
  // }

  // updateWishList() {
  //   localStorage.setItem('wishlist', this.wishlistArray);
  // }
}
