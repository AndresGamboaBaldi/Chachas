import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirInPage } from './anadir-in.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirInPageRoutingModule {}
