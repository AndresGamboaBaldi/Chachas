import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRecetaPage } from './home-receta.page';

const routes: Routes = [
  {
    path: '',
    component: HomeRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRecetaPageRoutingModule {}
