import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { FirestoreService } from "../services/firestore.service";

@Injectable({
  providedIn: "root",
})
export class GettersService {
  constructor(private firestoreService: FirestoreService) { }

  markers: any = [];
  motos: any = [];

  public loadSucursales(sucursalesArray) {
    this.markers = [];
    sucursalesArray.forEach((sucursal: any) => {
      let sucursalData = sucursal.payload.doc.data();
      let sucursalID = sucursal.payload.doc.id;
      this.markers.push({
        id: sucursalID,
        position: {
          lat: Number(sucursalData.position.lat),
          lng: Number(sucursalData.position.lng),
        },
        name: sucursalData.name,
        address: sucursalData.address,
        telephone: sucursalData.telephone,
        attention: sucursalData.attention,
        imageURL: sucursalData.imageURL
      });
    });
    return this.markers;
  }
  public loadMotos(motosArray) {
    this.motos = [];
    motosArray.forEach((moto: any) => {
      let motoData = moto.payload.doc.data();
      this.motos.push({
        id: moto.payload.doc.id,
        position: {
          lat: Number(motoData.position.lat),
          lng: Number(motoData.position.lng),
        },
        nombreDeMoto: motoData.nombreDeMoto,
        estado: motoData.estado
      });
    });
    return this.motos;
  }

}