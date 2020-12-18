import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirInPageRoutingModule } from './anadir-in-routing.module';

import { AnadirInPage } from './anadir-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirInPageRoutingModule
  ],
  declarations: [AnadirInPage]
})
export class AnadirInPageModule {}
