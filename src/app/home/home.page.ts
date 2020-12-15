import { Component,OnInit } from '@angular/core';
import { FirestoreService } from "../services/firestore.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  motos: any = [];
  constructor(
    private firestoreService: FirestoreService

  ) { }

  ngOnInit() {
    this.getMotos();
  }

  getMotos() {
    this.firestoreService.getData("Motos").subscribe((motosArray) => {
      this.motos = [];
      motosArray.forEach((moto: any) => {
        console.log(moto.payload.doc.id);
      });
      console.log(this.motos);
    });
  }
}
