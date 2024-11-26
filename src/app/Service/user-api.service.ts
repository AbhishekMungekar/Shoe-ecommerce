import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  wishlistArray: any = [];

  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post<any>('http://localhost:3000/users', data);
  }

  getData() {
    return this.http.get<any>('http://localhost:3000/users');
  }

  localUserStored() {
    const getUserId = localStorage.getItem('loginUser');
    // this.user = JSON.stringify(getUserId);
    // console.log(this.user);
    if (getUserId) {
      const value = JSON.parse(getUserId);
      return value;
    }
  }

  // WishList Api
  postWishList(data: any) {
    return this.http.post('http://localhost:3000/wishList', data);
  }

  getwishList() {
    return this.http.get('http://localhost:3000/wishList');
  }

  // WishList Store

  // addToWishList(data: any, userId: any) {
  //   const getdata = { ...data, userId };
  //   this.wishlistArray.push(getdata);
  //   localStorage.setItem('wishlist', JSON.stringify(this.wishlistArray));
  //   // this.updateWishList(this.wishlistArray);
  // }

  // updateWishList(val: any) {
  //   localStorage.setItem('wishlist', JSON.stringify(val));
  // }
}
// https://in.pinterest.com/pin/427419820901572278/
