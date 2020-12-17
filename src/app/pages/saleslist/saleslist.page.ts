import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Sale } from 'src/app/models/sale.interface';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { Sucursal } from 'src/app/models/sucursal.interface';

@Component({
  selector: 'app-saleslist',
  templateUrl: './saleslist.page.html',
  styleUrls: ['./saleslist.page.scss'],
})
export class SaleslistPage implements OnInit {

  public sales = Array<Sale>();
  public sucursales = Array<Sucursal>();
  public products = new Map();

  constructor(public saleslistService: FirestoreService) { }

  ngOnInit() {
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

  getProduct(id: string): void {
    this.saleslistService.getProductID(id).subscribe(product => {
      this.products.set(id.toString(), product);
    })
  }
}