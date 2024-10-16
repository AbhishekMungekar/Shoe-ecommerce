import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminApiService {

  constructor(private http: HttpClient) {}

  postAdmin(data: any) {
    return this.http.post('http://localhost:3000/admin', data, {
      observe: 'response',
    });
  }

  getAdmin() {
    return this.http.get<any>('http://localhost:3000/admin');
  }
}
