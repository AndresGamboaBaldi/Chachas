import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientesEmpPage } from './ingredientes-emp.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientesEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientesEmpPageRoutingModule {}
