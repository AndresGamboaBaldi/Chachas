import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaEjqPageRoutingModule } from './receta-ejq-routing.module';

import { RecetaEjqPage } from './receta-ejq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaEjqPageRoutingModule
  ],
  declarations: [RecetaEjqPage]
})
export class RecetaEjqPageModule {}
