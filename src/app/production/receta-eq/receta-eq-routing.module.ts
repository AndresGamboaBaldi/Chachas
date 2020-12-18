import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaEqPage } from './receta-eq.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaEqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaEqPageRoutingModule {}
