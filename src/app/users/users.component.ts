import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: any;
  elementInput: any;
  elementTitle: any;
  modal = false;
  elementModal: any;

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
    this.elementInput = document.getElementById("search") as HTMLElement

    if (this.elementInput.width == 0) this.showInput();

    this.elementInput.focus()
  }

  showInput() {
    this.elementTitle = document.getElementById("title") as HTMLElement
    this.elementTitle.style.display = "none"
    this.elementInput.style.display = "inline"
  }

  focusOut() {
    this.elementTitle.style.display = "inline"
    this.elementInput.style.display = "none"
  }

  displayModal(user?: any) {
    console.log('show modal', user)
    this.elementModal = document.getElementById("modal") as HTMLElement
    this.elementModal.style.display = "block"
  }

  hideModal() {
    this.elementModal = document.getElementById("modal") as HTMLElement
    this.elementModal.style.display = "none"
  }
}
