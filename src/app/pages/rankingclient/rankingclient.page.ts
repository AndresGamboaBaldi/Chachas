import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Cliente } from 'src/app/models/client.interface';
import { Console } from 'console';

@Component({
  selector: 'app-rankingclient',
  templateUrl: './rankingclient.page.html',
  styleUrls: ['./rankingclient.page.scss'],
})

export class RankingclientPage implements OnInit {
  public products = Array<Cliente>();
  public ranking = Array<{ uid: string, name: string, total: number, nit: string }>();
  textoBuscar: '';
  constructor(private dataApis: FirestoreService) { }

  ngOnInit() {
    this.getAllClients();
  }
  term: string;

  getAllClients(): void {
    this.dataApis.getAllClientes().subscribe(products => {
      this.products = products;
      this.products.forEach(a => {
        if ((this.ranking.findIndex(i => i.uid === a.uid)) != -1) {
          var element = this.ranking.find(i => i.uid === a.uid);
          element.total += 1;
          if(!element.name.includes(a.nombre)){
            element.name = element.name + ", "+a.nombre;
          }
          if(!element.nit.includes(a.nit)){
            element.nit = element.nit + ", "+a.nit;
          }
        } else {
          this.ranking.push({ "uid": a.uid, "name": a.nombre, "total": 1 , "nit": a.nit});
        }
      });
      this.ranking.sort(function (a, b) {
        if (a.total < b.total) {
          return 1;
        }
        if (a.total > b.total) {
          return -1;
        }
        return 0;
      });

    });
  }
  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

}