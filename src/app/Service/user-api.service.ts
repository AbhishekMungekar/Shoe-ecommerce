import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post<any>('http://localhost:3000/users', data);
  }

  getData() {
    return this.http.get<any>('http://localhost:3000/users');
  }
}
// https://in.pinterest.com/pin/427419820901572278/