import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankingclientPageRoutingModule } from './rankingclient-routing.module';

import { RankingclientPage } from './rankingclient.page';

import { PipesModule } from 'src/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingclientPageRoutingModule,
    PipesModule
  ],
  declarations: [RankingclientPage]
})
export class RankingclientPageModule {}
