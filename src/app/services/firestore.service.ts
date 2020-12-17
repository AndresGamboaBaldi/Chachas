import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Sale } from 'src/app/models/sale.interface';
import { map } from 'rxjs/operators';
import { Product } from "../models/product.interface";
import { Sucursal } from "../models/sucursal.interface";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  private salesCollection: AngularFirestoreCollection<Sale>;
  private productsCollection: AngularFirestoreCollection<Product>;
  private sucursalesCollection: AngularFirestoreCollection<Sucursal>;
  constructor(private angularFirestore: AngularFirestore) {
    this.salesCollection = angularFirestore.collection<Sale>('Pedidos');
    //this.sucursalesCollection = angularFirestore.collection<Sucursal>('Inventario/comida/');
  }
  
  public getData(collection) {
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

  public getSucursales() {
    return this.sucursalesCollection.snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Sucursal;
            console.log("pvtoos");
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }


  getProductoSucursal(id: string) {
    this.productsCollection = this.angularFirestore.collection<Product>(`Inventario/comida/${id}/`);
    return this.productsCollection.snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Product;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        ) 
      );
  }
}
