import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showNav = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }
}