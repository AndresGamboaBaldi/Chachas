import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Sale } from 'src/app/models/sale.interface';
import { map } from 'rxjs/operators';
import { Product } from "../models/product.interface";
import { Cliente } from 'src/app/models/client.interface';

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  private salesCollection: AngularFirestoreCollection<Sale>;
  private productsCollection: AngularFirestoreCollection<Product>;
  private product: AngularFirestoreDocument<Product>;
  private clientsCollection: AngularFirestoreCollection<Cliente>;
  constructor(private angularFirestore: AngularFirestore) {
    this.salesCollection = angularFirestore.collection<Sale>('Pedidos');
    this.clientsCollection = angularFirestore.collection<Product>('Cliente');
  }
  
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

  public getSales() {
    return this.salesCollection.snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Sale;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  
  public getAllClientes() {
    return this.clientsCollection.snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Cliente;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  getProductID(id: string) {
    this.product = this.angularFirestore.doc<Product>(`Comida/${id}`);
    return this.product.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Product;
        return data;
      }
    }));
  }
  
  public getMotoById(id)  {
    return this.angularFirestore.collection("Motos").doc(id).valueChanges();
  }

  public updateData(collection, id, data) {
    return this.angularFirestore.collection(collection).doc(id).update(data);
  }
}