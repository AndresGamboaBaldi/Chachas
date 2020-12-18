import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaEmpPage } from './receta-emp.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaEmpPageRoutingModule {}
