import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = 'http://localhost:3001/users';

  constructor(private httpClient:HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.url);
  }

  createUser(data: any) {
    return this.httpClient.post(this.url, data);
  }

  updateUser(data: any) {
    return this.httpClient.put(`${this.url}/${data.id}`, data);
  }

  search(data: string) {
    return this.httpClient.get(`${this.url}?q=${data}`);
  }
}
