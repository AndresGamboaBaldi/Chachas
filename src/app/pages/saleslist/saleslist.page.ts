import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Sale } from 'src/app/models/sale.interface';
import { Product } from 'src/app/models/product.interface';
import { Sucursal } from 'src/app/models/sucursal.interface';
import { DatePipe } from '@angular/common';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-saleslist',
  templateUrl: './saleslist.page.html',
  styleUrls: ['./saleslist.page.scss'],
})
export class SaleslistPage implements OnInit {

  public sales = Array<Sale>();
  public sucursales = Array<Sucursal>();
  public products = new Map();
  public initialdate: Date;
  public lastdate: Date;

  constructor(public saleslistService: FirestoreService) { }

  ngOnInit() {
    //this.initialdate = new Date();
    //this.lastdate = new Date();
    this.getAllSales();
  }

  getAllSales(): void {
    this.saleslistService.getSales().subscribe(sales => {
      this.sales = sales;
      this.getAllProducts();
    })
  }

  getAllProducts(): void {
    this.sales.forEach((sale) => {
      sale.productos.forEach((producto) => {
        this.getProduct(producto.id);
      });
    });
  }

  isInDate(fecha: Date): boolean {
    return new Date(this.initialdate) <= fecha && fecha <= new Date(this.lastdate);
  }

  getProduct(id: string): void {
    this.saleslistService.getProductID(id).subscribe(product => {
      this.products.set(id.toString(), product);
    })
  }
}
