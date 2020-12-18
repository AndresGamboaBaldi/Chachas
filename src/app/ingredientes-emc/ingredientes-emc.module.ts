import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientesEmcPageRoutingModule } from './ingredientes-emc-routing.module';

import { IngredientesEmcPage } from './ingredientes-emc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientesEmcPageRoutingModule
  ],
  declarations: [IngredientesEmcPage]
})
export class IngredientesEmcPageModule {}
