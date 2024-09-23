import { Component } from '@angular/core';

@Component({
  selector: 'app-bibliotecaheader',
  templateUrl: './bibliotecaheader.component.html',
  styleUrls: ['./bibliotecaheader.component.css']
})
export class BibliotecaheaderComponent {
  isMenuOpen=false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
