import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeRecetaPageRoutingModule } from './home-receta-routing.module';

import { HomeRecetaPage } from './home-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRecetaPageRoutingModule
  ],
  declarations: [HomeRecetaPage]
})
export class HomeRecetaPageModule {}
