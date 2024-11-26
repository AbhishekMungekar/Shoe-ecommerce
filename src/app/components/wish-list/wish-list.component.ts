// import { Component, OnInit } from '@angular/core';
// import { AdminApiService } from 'src/app/Service/admin-api.service';
// import { UserApiService } from 'src/app/Service/user-api.service';

// @Component({
//   selector: 'app-wish-list',
//   templateUrl: './wish-list.component.html',
//   styleUrls: ['./wish-list.component.css'],
// })
// export class WishListComponent implements OnInit {
//   constructor(private userApi: UserApiService) {
//     // this.wishList = this.adminApi.wishListService;
//   }

//   wishList: any = [];
//   userId: any;

//   ngOnInit() {
//     // const getLocalWishList = localStorage.getItem('wishlist');
//     // if (getLocalWishList) {
//     //   const value = JSON.parse(getLocalWishList);
//     //   this.wishList = [...value];
//     //   console.log(this.wishList, 'Wishlistval');
//     // }

//     // this.userApi.getwishList().subscribe((val: any) => {
//     //   this.wishList = val;
//     //   console.log(this.wishList, 'wishlist');
//     // });

//     const localVal = localStorage.getItem('loginUser');

//     if (localVal) {
//       const data = JSON.parse(localVal);
//       // console.log(data.id, 'getid');
//       this.specificUserWish(data.userId);
//     }
//   }

//   specificUserWish(id: any) {
//     this.userApi.getwishList().subscribe((res: any) => {
//       const filterByUser = res.filter((val: any) => [id === val.id]);
//       this.wishList = filterByUser;
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/Service/user-api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  wishList: any[] = [];
  userId: string | null = null;

  constructor(private userApi: UserApiService) {}

  ngOnInit() {
    // Fetch the user ID from localStorage
    const localVal = localStorage.getItem('loginUser');

    if (localVal) {
      const data = JSON.parse(localVal);
      this.userId = data.id; // Assuming userId is a field in the stored object
      this.fetchUserWishList(this.userId!);
    } else {
      console.error('No loginUser data found in localStorage.');
    }
  }

  fetchUserWishList(userId: string) {
    this.userApi.getwishList().subscribe((res: any) => {
      // Filter the wishlist data by userId
      this.wishList = res.filter((item:any) => item.userId === userId);
      console.log(this.wishList, 'Filtered Wishlist');
    });
  }
}
