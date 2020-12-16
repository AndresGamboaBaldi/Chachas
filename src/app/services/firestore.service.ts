import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Sale } from 'src/app/models/sale.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  private salesCollection: AngularFirestoreCollection<Sale>;
  constructor(private angularFirestore: AngularFirestore) {
    this.salesCollection = angularFirestore.collection<Sale>('venta');
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
}
