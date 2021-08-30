import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // url = 'http://localhost:3001/users';
  url = 'http://iacenter.victortalamantes.com';

  constructor(private httpClient:HttpClient) { }

  getUsers() {
    // return this.httpClient.get(this.url);
    return this.httpClient.get(`${this.url}/users`);
  }

  createUser(data: any) {
    // return this.httpClient.post(this.url, data);
    return this.httpClient.post(`${this.url}/user`, data);
  }

  updateUser(data: any) {
    // return this.httpClient.put(`${this.url}/${data.id}`, data);
    return this.httpClient.put(`${this.url}/user`, data);
  }

  // search(data: string) {
  //   return this.httpClient.get(`${this.url}?q=${data}`);
  // }
}
