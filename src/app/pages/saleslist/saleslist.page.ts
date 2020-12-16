import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Sale } from 'src/app/models/sale.interface';
import { from } from 'rxjs';

@Component({
  selector: 'app-saleslist',
  templateUrl: './saleslist.page.html',
  styleUrls: ['./saleslist.page.scss'],
})
export class SaleslistPage implements OnInit {

  public sales = Array<Sale>();

  constructor(public saleslistService: FirestoreService) { }

  ngOnInit() {
    this.getAllSales();
  }

  getAllSales(): void {
    this.saleslistService.getSales().subscribe(sales => {
      this.sales = sales;
    })
  }
}
