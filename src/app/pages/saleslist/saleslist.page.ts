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
  public products = Array<Product>();

  constructor(public saleslistService: FirestoreService) { }

  ngOnInit() {
    this.getAllSales();
    //this.getAllSucursales();
    console.log(this.sucursales);
    //this.getAllProducts();
  }

  getAllSales(): void {
    this.saleslistService.getSales().subscribe(sales => {
      this.sales = sales;
    })
  }
  getAllSucursales(): void {
    this.saleslistService.getSucursales().subscribe(sucursales => {
      this.sucursales = sucursales;
    })
  }

  getAllProducts() {
    for (let i = 0; i < this.sucursales.length; i++) {
      this.getProducts(this.sucursales[i].id);
    }
  }

  getProducts(id: string): void {
    this.saleslistService.getProductoSucursal(id).subscribe(products => {
      for (let i = 0; i < products.length; i++) {
        this.products.push(products[i]);
      }
    })
  }
}
