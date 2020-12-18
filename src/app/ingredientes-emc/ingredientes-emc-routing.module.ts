import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientesEmcPage } from './ingredientes-emc.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientesEmcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientesEmcPageRoutingModule {}
