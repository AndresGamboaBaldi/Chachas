import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-receta',
  templateUrl: './home-receta.page.html',
  styleUrls: ['./home-receta.page.scss'],
})
export class HomeRecetaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingredientes_emp()
  {
    this.router.navigate(['/ingredientes-emp']);
  }

  ingredientes_emc()
  {
    this.router.navigate(['/ingredientes-emc']);
  }

  ingredientes_emq()
  {
    this.router.navigate(['/ingredientes-emq']);
  }

  ingredientes_ejq()
  {
    this.router.navigate(['/ingredientes-ejq']);
  }

  receta_emp()
  {
    this.router.navigate(['/receta-emp']);
  }

  receta_emc()
  {
    this.router.navigate(['/receta-emc']);
  }

  receta_emq()
  {
    this.router.navigate(['/receta-eq']);
  }

  receta_ejq()
  {
    this.router.navigate(['/receta-ejq']);
  }

}
