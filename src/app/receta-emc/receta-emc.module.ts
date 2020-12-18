import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaEmcPageRoutingModule } from './receta-emc-routing.module';

import { RecetaEmcPage } from './receta-emc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaEmcPageRoutingModule
  ],
  declarations: [RecetaEmcPage]
})
export class RecetaEmcPageModule {}
