import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: any;
  input: any;
  title: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  getImage(gender: string) {
    if (gender == 'm') {
      return './assets/img/icono_hombre.svg'
    }

    return './assets/img/icono_mujer.svg'
  }

  onClick() {
    this.input = document.getElementById("search") as HTMLElement

    if (this.input.width == 0) this.showInput();

    this.input.focus()
  }

  showInput() {
    this.title = document.getElementById("title") as HTMLElement
    this.title.style.display = "none"
    this.input.style.display = "inline"
  }

  focusOut() {
    this.title.style.display = "inline"
    this.input.style.display = "none"
  }
}
