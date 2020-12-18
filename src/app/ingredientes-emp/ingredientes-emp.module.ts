import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientesEmpPageRoutingModule } from './ingredientes-emp-routing.module';

import { IngredientesEmpPage } from './ingredientes-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientesEmpPageRoutingModule
  ],
  declarations: [IngredientesEmpPage]
})
export class IngredientesEmpPageModule {}
