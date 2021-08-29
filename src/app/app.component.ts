import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'CMS Angular';
  elementModal: any;

  displayModal() {
    this.elementModal = document.getElementById("modal") as HTMLElement
    this.elementModal.style.display = "block"
  }
}
