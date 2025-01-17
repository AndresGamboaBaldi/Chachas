import { Component, OnInit, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
import { MarkerOptions } from '@ionic-native/google-maps';
import { FirestoreService } from "../services/firestore.service";
import { ActivatedRoute } from '@angular/router';

declare var google;

@Component({
  selector: 'app-gestion-pedido',
  templateUrl: './gestion-pedido.page.html',
  styleUrls: ['./gestion-pedido.page.scss'],
})

export class GestionPedidoPage implements OnInit {
  lat: Number;
  lng: Number;
  motos: MarkerOptions[] = [];
  maps: any;
  pedidos: MarkerOptions[] = [];
  directionsRenderer: any;
  directionsService: any;
  id: string;
  driver: any;
  moto: any;
  pedido: string;
  productos = [];
  comida :any = [];
  constructor(
    private geolocation: Geolocation,
    public zone: NgZone,
    public navCtrl: NavController,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.driver = this.id.split('@');
    this.getMotos();
    this.getPedidos();
    this.loadMaps();
  }

  loadMaps() {
    this.geolocation.getCurrentPosition().then((res) => {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();

      let moto = this.motos[0];
      this.lat = Number(moto.position.lat);
      this.lng = Number(moto.position.lng);

      let map = this.loadMapOptions(moto);
      this.directionsRenderer.setMap(map);

      map.addListener('tilesloaded', () => {
        this.lat = map.center.lat()
        this.lng = map.center.lng()
        const markerObj = this.addMaker(moto, map, "../assets/icon/repartidor.png");
        moto.markerObj = markerObj;
        this.obtener_pedido_por_moto(map, moto);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  private loadMapOptions(moto: MarkerOptions) {
    let mapOptions = {
      center: new google.maps.LatLng(moto.position.lat, moto.position.lng),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    let map = new google.maps.Map(
      document.getElementById("maps"),
      mapOptions
    );
    return map;
  }

  getMotos() {
    this.firestoreService.getSnapshotData("Motos").subscribe((motosArray) => {
      this.motos = [];
      motosArray.forEach((moto: any) => {
        if (moto.payload.doc.id === this.id) {
          let motoData = moto.payload.doc.data();
          this.motos.push({
            id: moto.payload.doc.id,
            position: {
              lat: Number(motoData.position.lat),
              lng: Number(motoData.position.lng),
            },
            LatLngMoto: new google.maps.LatLng(motoData.position.lat, motoData.position.lng),
            nombreDeMoto: motoData.nombreDeMoto.toUpperCase(),
            estado: motoData.estado
          });
        }
      });
    });
  }
  addMaker(itemMarker: MarkerOptions, newMap: any, path: String) {
    const marker = new google.maps.Marker({
      position: { lat: itemMarker.position.lat, lng: itemMarker.position.lng },
      map: newMap,
      title: itemMarker.nombreMoto,
      icon: path
    });
    return marker;
  }

  getPedidos() {
    this.firestoreService.getSnapshotData("Pedidos").subscribe((pedidosList) => {
      this.pedidos = [];
      pedidosList.forEach((pedido: any) => {
        let pedidoData = pedido.payload.doc.data();
        this.pedidos.push({
          id: pedido.payload.doc.id,
          position: {
            lat: Number(pedidoData.position.lat),
            lng: Number(pedidoData.position.lng),
          },
          LatLngPedido: new google.maps.LatLng(pedidoData.position.lat, pedidoData.position.lng),
          estado: pedidoData.estado,
          direccion: pedidoData.direccion,
          moto: pedidoData.moto,
          nombre: pedidoData.nombre,
          productos: pedidoData.productos,
          sucursal: pedidoData.sucursal,
          pedido: pedidoData.pedido,
          fecha: pedidoData.fechahorapedido,
          telefono: pedidoData.telefono,
          total: pedidoData.total,
          nit: pedidoData.nit,
        });
      });
    });
  }
  /*getComida() {
    this.firestoreService.getSnapshotData("Comida").subscribe((comidaList) => {
      this.comida = [];
      comidaList.forEach((comida: any) => {
        let comidaData = comida.payload.doc.data();
        this.comida.push({
          id:comida.payload.doc.id,
          nombre: comidaData.nombre
        });
      });
    });
  }*/
  obtener_pedido_por_moto(map: any, moto: any) {
    this.productos = [];
    this.pedidos.forEach((pedido) => {
      if (pedido.moto == this.id) {
        const p_markerObj = this.addMaker(pedido, map, "../assets/icon/home1.png");
        pedido.p_markerObj = p_markerObj;
        this.pedido = pedido.pedido.toUpperCase();
        this.setPedidoInfo(pedido);
        pedido.productos.forEach(producto => {
          this.productos.push(producto);
        });
        this.getRoute(new google.maps.LatLng(moto.position.lat, moto.position.lng), pedido.LatLngPedido);
      }
    });
  }

  private setPedidoInfo(pedido: MarkerOptions) {
    (document.getElementById("idPedido") as HTMLElement).innerHTML = " \t " + pedido.pedido.toUpperCase();
    (document.getElementById("fechaPedido") as HTMLElement).innerHTML = " \t Fecha : " + pedido.fecha.toDate().toLocaleDateString('en-GB');
    (document.getElementById("horaPedido") as HTMLElement).innerHTML = " \t Hora: " + pedido.fecha.toDate().toLocaleTimeString();
    (document.getElementById("nombreCliente") as HTMLElement).innerHTML = " \t Nombre : " + pedido.nombre;
    (document.getElementById("nitCliente") as HTMLElement).innerHTML = " \t NIT : " + pedido.nit;
    (document.getElementById("direccionCliente") as HTMLElement).innerHTML = " \t Dirección : " + pedido.direccion;
    (document.getElementById("telefonoCliente") as HTMLElement).innerHTML = " \t Teléfono : " + pedido.telefono;
  }

  private getRoute(start: String, end: String) {
    this.directionsService.route({
      origin: start,
      destination: end,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) => {
      if (status === "OK") {
        this.directionsRenderer.setDirections(response);
        this.computeTotalDistance(this.directionsRenderer.getDirections());
      } else {
        console.log("Direction Error : " + status);
      }
    });
  }

  computeTotalDistance(result) {
    let total = 0;
    let time = 0;
    const myroute = result.routes[0];
    for (let i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
      time += myroute.legs[i].duration.value;
    }
    time = parseInt((time / 60).toString());
    total = total / 1000;
    (document.getElementById("total") as HTMLElement).innerHTML = "A " + total + " km. de Distancia del Pedido.  ( " + time + " min )";

  }
}


