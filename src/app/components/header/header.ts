import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isMenuOpen = false;
  activeLink = 'Accueil';
  isMobile = false;

  links = ['Accueil', 'Menu', 'Témoignages', 'Horaires', 'Contact'];

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.checkMobile();
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
        this.ngZone.run(() => this.checkMobile());
      });
    });
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;
  }
}

