import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: any;
  elementInput: any;
  elementTitle: any;
  elementModal: any;
  string = '';
  editing = false;
  u = {
    id: '',
    firstName: '',
    lastName: '',
    location: '',
    phone: '',
    gender: 'm',
  }

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
    this.elementModal = document.getElementById("modal") as HTMLElement
    this.elementModal.style.display = "block"
    if (user){
      this.u = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          location: user.location,
          phone: user.phone,
          gender: user.gender,
        }
    }
    this.editing = true
  }

  hideModal() {
    this.elementModal = document.getElementById("modal") as HTMLElement
    this.elementModal.style.display = "none"
    this.reset()
  }

  reset() {
    this.editing = false
    this.u = {
        id: '',
        firstName: '',
        lastName: '',
        location: '',
        phone: '',
        gender: 'm',
      }
  }

  guardar($event: any) {
    $event.preventDefault()

    if (this.editing) {
      this.userService.updateUser(this.u).subscribe(response => {
        this.users = response;
      })
    } else {
      this.userService.createUser(this.u).subscribe(response => {
        this.users = response;
      })
    }

    this.hideModal();

    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  search() {
    this.userService.search(this.string).subscribe(response => {
      this.users = response;
    })
  }
}
