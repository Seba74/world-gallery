import { Component, ViewChild } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isClosed: boolean = true;
  secondaryNav: boolean = false;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  @ViewChild('logo') logo: ElementRef | undefined;
  @ViewChild('links') links: ElementRef | undefined;
  @ViewChild('footer') footer: ElementRef | undefined;
  newClass: string = '';

  constructor() { }


  toggleNavbar() {
    this.isClosed = !this.isClosed;
    this.secondaryNav = false;
    setTimeout(() => {
      this.newClass = 'show animate__animated animate__fadeIn';
    }, 430);
  }

  closeNavbar() {
    this.isClosed = !this.isClosed;
    this.secondaryNav = !this.secondaryNav;
    this.newClass = '';
  }

}
