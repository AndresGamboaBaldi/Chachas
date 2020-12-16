import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  constructor(private angularFirestore: AngularFirestore) {}
  
  public insertSucursal( latitud :number, longitud: number, nombre :string, direccion :string, telefono :number, horario :string, imagen :string){
    this.angularFirestore.doc('Sucursales/'+ this.angularFirestore.createId()).set({
        position: {
          lat: latitud,
          lng: longitud
        },
        name: nombre,
        address: direccion,
        telephone: telefono,
        attention: horario,
        imageURL: imagen
    });
  }
  public insertMoto(collection, id, nombre) {
    this.angularFirestore.doc(collection + '/' + id).set({ 
      position: {
        lat: 0,
        lng: 0
      },
      nombreDeMoto: nombre,
      estado: "ocupado",
      flogin: true,
    });
  }
  public insertPedido() {
    this.angularFirestore.doc("Pedidos" + '/' + this.angularFirestore.createId()).set({ 
      position: {
        lat: "-17.34",
        lng: "-66.18",
      },
      estado: "Listo para recoger",
      direccion: "",
      fechahorapedido: "",
      nit: "",
      moto: "",
      nombre: "",
      productos: "",
      sucursal: "AuYoEEJO3bqIriiyop85",
      telefono: "",
      total: ""});
  }

  public getData(collection) {
    return this.angularFirestore.collection(collection).valueChanges();
  }

  public getSnapshotData(collection) {
    return this.angularFirestore.collection(collection).snapshotChanges();
  }
  
  public getMotoById(id)  {
    return this.angularFirestore.collection("Motos").doc(id).valueChanges();
  }

  public updateData(collection, id, data) {
    return this.angularFirestore.collection(collection).doc(id).update(data);
  }
}
