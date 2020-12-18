import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.sucursales = this.llenado();
  }

  sucursales = [];

  llenado()
  {
    var objects = [];
    let ref = firebase.firestore().collection('Sucursales');
    ref.get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach(doc => {
          console.log(doc.data().name);
          objects.push({nombre: doc.data().name});
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
      console.log(objects);

    return objects;
  }

  async saveNewDates(nombre, descripcion, cantidad, precio, imagen, sucursal) {
    var f= new Date();
    var fecha_creacion = (f.getDate() + '_' + f.getMonth()+'_'+f.getFullYear()+'_'+f.getHours()+'_'+f.getMinutes()+'_'+f.getMilliseconds());
    console.log(sucursal.nombre);
    console.log('clicked!');
    
    var fire = firebase.firestore();

    const aux = await fire.collection('Comida').add({
      nombre: nombre.value,
      descripcion: descripcion.value,
      cantidad: parseInt(cantidad.value),
      precio: parseFloat(precio.value),
      imagen: imagen.value,
      fecha_creacion: fecha_creacion,
      promocion: false,
      rating: 0,
      descuento: 0,
      sucursal: sucursal.nombre
    });

    let sfRef = fire.collection('Sucursales');
    
    await sfRef.get().then(collections => {
    collections.forEach(collection => {
      if(collection.data().name == sucursal.nombre)
      {
        console.log('Found subcollection with id:', collection.id);
        fire.collection('Inventario').doc('comida').collection(collection.id).doc(aux.id).set({
          nombre: nombre.value,
          descripcion: descripcion.value,
          cantidad: parseInt(cantidad.value),
          precio: parseFloat(precio.value),
          imagen: imagen.value,
          fecha_creacion: fecha_creacion,
          promocion: false,
          rating: 0,
          descuento: 0,
          sucursal: sucursal.nombre
        });
      }
    });
    });
    nombre.value = '';
    descripcion.value = '';
    cantidad.value = '';
    precio.value = '';
    imagen.value = '';

    let alert = this.alertCtrl.create({
      header: 'Importante',
      message: 'Guardado en la base de datos',
      buttons: ['OK']
    });
    
    (await alert).present();
  }
  }


