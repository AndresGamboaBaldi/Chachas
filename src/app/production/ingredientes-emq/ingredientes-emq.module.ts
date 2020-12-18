import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientesEmqPageRoutingModule } from './ingredientes-emq-routing.module';

import { IngredientesEmqPage } from './ingredientes-emq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientesEmqPageRoutingModule
  ],
  declarations: [IngredientesEmqPage]
})
export class IngredientesEmqPageModule {}
