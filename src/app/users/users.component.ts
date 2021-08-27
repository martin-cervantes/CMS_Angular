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
  editing = false;
  u = {
    id: '',
    first_name: '',
    last_name: '',
    location: '',
    phone_number: '',
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
          first_name: user.first_name,
          last_name: user.last_name,
          location: user.location,
          phone_number: user.phone_number,
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
        first_name: '',
        last_name: '',
        location: '',
        phone_number: '',
        gender: 'm',
      }
  }

  guardar() {
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
}
