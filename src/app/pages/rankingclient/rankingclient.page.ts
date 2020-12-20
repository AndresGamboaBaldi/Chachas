import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Cliente } from 'src/app/models/client.interface';


@Component({
  selector: 'app-rankingclient',
  templateUrl: './rankingclient.page.html',
  styleUrls: ['./rankingclient.page.scss'],
})

export class RankingclientPage implements OnInit {
  public products = Array<Cliente>();
  public ranking = Array<{ uid: string, name: string, totalsale: number, nit: string, totalspent: number }>();
  public initialdate: Date;
  public lastdate: Date;
  public fundate;
  textoBuscar: '';
  minSpent: 0;
  minSale: 0;
  constructor(private dataApis: FirestoreService) { }

  ngOnInit() {
    this.getAllClients();
  }
  term: string;

  getAllClients(): void {
    this.ranking = [];
    this.dataApis.getAllClientes().subscribe(products => {
      this.products = products;
      this.products.forEach(a => {
        // this.fundate = a.fecha;
        //console.log(">> "+ this.fundate.toDate());

        if (this.isInDate(a.fecha.toDate())) {
          if ((this.ranking.findIndex(i => i.uid === a.uid)) != -1) {
            var element = this.ranking.find(i => i.uid === a.uid);
            element.totalsale += 1;
            element.totalspent+=a.total;
            if (!element.name.includes(a.nombre)) {
              element.name = element.name + ", " + a.nombre;
            }
            if (!element.nit.includes(a.nit)) {
              element.nit = element.nit + ", " + a.nit;
            }
          } else {
            this.ranking.push({ "uid": a.uid, "name": a.nombre, "totalsale": 1, "nit": a.nit, "totalspent":a.total });
          }
        }
      });
      this.sortlist(this.ranking,this.sortby);

    });
  }
  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

  setMinSpent(event) {
    this.minSpent = event.detail.value;
  }

  sortlist(list: Array<Object>, sortby:number){
    list.sort(function(a,b){
      if(sortby == 0){
        if(a.totalsale < b.totalsale){
          return 1;
        }
        if(a.totalsale > b.totalsale){
          return -1;
        }
      }
      if(sortby == 1){
        if(a.totalspent < b.totalspent){
          return 1;
        }
        if(a.totalspent > b.totalspent){
          return -1;
        }
      }
      
      return 0;
    });
    return list;
  }

  isInDate(fecha: Date): boolean {
    return new Date(this.initialdate) <= fecha && fecha <= new Date(this.lastdate);
  }
}