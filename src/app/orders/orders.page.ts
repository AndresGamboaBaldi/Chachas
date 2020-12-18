import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { FirestoreService } from "../services/firestore.service";

interface Estado {
  id: number;
  state: string;
}

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit {
  pedidos: any = [];
  badgecolor: string;
  estadoElegido: any;
  estados: Estado[] = [
    {
      id: 1,
      state: "Todos",
    },
    {
      id: 2,
      state: "En camino",
    },
    {
      id: 3,
      state: "Entregado",
    },
    {
      id: 4,
      state: "Listo para recoger",
    },
    {
      id: 5,
      state: "Pendiente",
    },
  ];
  constructor(
    private firestoreService: FirestoreService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos() {
    this.firestoreService
      .getSnapshotData("Pedidos")
      .subscribe((pedidosList) => {
        this.pedidos = [];
        pedidosList.forEach((pedido: any) => {
          let pedidoData = pedido.payload.doc.data();
          let idPedido = pedido.payload.doc.id.toUpperCase();
          if (
            typeof this.estadoElegido !== "undefined" &&
            pedidoData.estado === this.estadoElegido.state
          ) {
            this.pedidos.push({
              id: idPedido,
              position: {
                lat: pedidoData.position.lat,
                lng: pedidoData.position.lng,
              },
              estado: pedidoData.estado,
              direccion: pedidoData.direccion,
              fechahorapedido: pedidoData.fechahorapedido,
              nit: pedidoData.nit,
              driver: this.getDriverName(pedidoData.moto)[0].toUpperCase(),
              moto: pedidoData.moto,
              nombre: pedidoData.nombre,
              productos: pedidoData.productos,
              sucursal: pedidoData.sucursal,
              telefono: pedidoData.telefono,
              total: pedidoData.total,
            });
          } else if (
            typeof this.estadoElegido === "undefined" ||
            this.estadoElegido.state === "Todos"
          ) {
            this.pedidos.push({
              id: idPedido,
              position: {
                lat: pedidoData.position.lat,
                lng: pedidoData.position.lng,
              },
              estado: pedidoData.estado,
              direccion: pedidoData.direccion,
              fechahorapedido: pedidoData.fechahorapedido,
              nit: pedidoData.nit,
              driver: this.getDriverName(pedidoData.moto)[0].toUpperCase(),
              moto: pedidoData.moto,
              nombre: pedidoData.nombre,
              productos: pedidoData.productos,
              sucursal: pedidoData.sucursal,
              telefono: pedidoData.telefono,
              total: pedidoData.total,
            });
          }
        });
      });
  }
  onChange(event) {
    this.estadoElegido = event.target.value;
    this.getPedidos();
  }
  getDriverName(user: string) {
    return user.split("@");
  }

  setBadgeColor(value: string) {
    switch (true) {
      case value === "Listo para recoger":
        return "tertiary";
      case value === "Entregado":
        return "success";
      case value === "Pendiente":
        return "danger";
      default:
        return "warning";
    }
  }
  checkOrderState(driver) {
    this.navCtrl.navigateForward("tabs/gestion-pedido/" + driver);
  }
}
