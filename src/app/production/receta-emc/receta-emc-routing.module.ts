import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaEmcPage } from "./receta-emc.page";

const routes: Routes = [
  {
    path: '',
    component: RecetaEmcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaEmcPageRoutingModule {}
