import { Component, OnInit } from '@angular/core';
import { User, USERS } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = USERS;

  constructor() { }

  ngOnInit(): void {
  }
}
