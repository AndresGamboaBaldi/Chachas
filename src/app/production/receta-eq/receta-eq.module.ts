import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaEqPageRoutingModule } from './receta-eq-routing.module';

import { RecetaEqPage } from './receta-eq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaEqPageRoutingModule
  ],
  declarations: [RecetaEqPage]
})
export class RecetaEqPageModule {}
