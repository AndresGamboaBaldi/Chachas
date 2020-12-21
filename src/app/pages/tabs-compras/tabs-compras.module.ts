import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsComprasPageRoutingModule } from './tabs-compras-routing.module';

import { TabsComprasPage } from './tabs-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsComprasPageRoutingModule
  ],
  declarations: [TabsComprasPage]
})
export class TabsComprasPageModule {}
