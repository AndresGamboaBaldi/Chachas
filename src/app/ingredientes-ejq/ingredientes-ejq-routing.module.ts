import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientesEjqPage } from './ingredientes-ejq.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientesEjqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientesEjqPageRoutingModule {}
