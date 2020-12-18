import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../../firestore.service';
import { Tarea } from '../../tarea';

@Component({
  selector: 'app-receta-emc',
  templateUrl: './receta-emc.page.html',
  styleUrls: ['./receta-emc.page.scss'],
})
export class RecetaEmcPage implements OnInit {
  tareaEditando: Tarea;

  constructor(private firestoreService: FirestoreService) {
    // Crear una tarea vacía
    this.tareaEditando = {} as Tarea;
  }
  clicBotonInsertar() {
    this.firestoreService.insertar("Receta", this.tareaEditando).then(() => {
      console.log('Tarea creada correctamente!');
      this.tareaEditando = {} as Tarea;
    }, (error) => {
      console.error(error);
    });
  }
  name: string;
  cantidad: string;
  fecha: string;


  //ontroller,
  private router: Router;
  //) { }
  ngOnInit() {
  }

}
