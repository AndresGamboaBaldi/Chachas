import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaEjqPage } from './receta-ejq.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaEjqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaEjqPageRoutingModule {}
