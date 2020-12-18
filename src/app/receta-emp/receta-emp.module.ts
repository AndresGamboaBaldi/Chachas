import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaEmpPageRoutingModule } from './receta-emp-routing.module';

import { RecetaEmpPage } from './receta-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaEmpPageRoutingModule
  ],
  declarations: [RecetaEmpPage]
})
export class RecetaEmpPageModule {}
