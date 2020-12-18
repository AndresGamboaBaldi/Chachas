import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirestoreService } from '../../firestore.service';
import { Tarea } from '../../tarea';
@Component({
  selector: 'app-receta-emp',
  templateUrl: './receta-emp.page.html',
  styleUrls: ['./receta-emp.page.scss'],
})
export class RecetaEmpPage implements OnInit {

  tareaEditando: Tarea;  

  constructor(private firestoreService: FirestoreService) {
    // Crear una tarea vacía
    this.tareaEditando = {} as Tarea;
  } 
  clicBotonInsertar() {
    this.firestoreService.insertar("Receta", this.tareaEditando).then(() => {
      console.log('Tarea creada correctamente!');
      this.tareaEditando= {} as Tarea;
    }, (error) => {
      console.error(error);
    });
  }
  name: string;
  cantidad: string;
  fecha: string;
  

 //ontroller,
    private router: Router
  //) { }
  ngOnInit() {
  }
  
 // this.afs.collection('Receta').set({
    
    

  }
