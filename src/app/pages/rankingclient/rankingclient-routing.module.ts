import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingclientPage } from './rankingclient.page';

const routes: Routes = [
  {
    path: '',
    component: RankingclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingclientPageRoutingModule {}
