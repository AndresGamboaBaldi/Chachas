import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Sale } from 'src/app/models/sale.interface';
import { map } from 'rxjs/operators';
import { Product } from "../models/product.interface";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  private salesCollection: AngularFirestoreCollection<Sale>;
  private productsCollection: AngularFirestoreCollection<Product>;
  private product: AngularFirestoreDocument<Product>;

  constructor(private angularFirestore: AngularFirestore) {
    this.salesCollection = angularFirestore.collection<Sale>('Pedidos');
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

  public getProducts() {
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
}

/* getProductoSucursal(id: string) {
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
  }*/