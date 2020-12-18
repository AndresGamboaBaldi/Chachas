import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  home_receta()
  {
    this.router.navigate(['/home-receta']);
  }

  anadirin()
  {
    this.router.navigate(['/anadir-in']);
  }

  stock()
  {
    this.router.navigate(['/stock']);
  }

  registrar()
  {
    this.router.navigate(['/register']);
  }

  logout()
  {
    this.router.navigate(['/login']);
  }
}
