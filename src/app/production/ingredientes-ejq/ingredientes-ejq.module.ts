import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientesEjqPageRoutingModule } from './ingredientes-ejq-routing.module';

import { IngredientesEjqPage } from './ingredientes-ejq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientesEjqPageRoutingModule
  ],
  declarations: [IngredientesEjqPage]
})
export class IngredientesEjqPageModule {}
