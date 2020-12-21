import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltroMin } from './filtro.pipe';


@NgModule({
  declarations: [FiltroPipe, FiltroMin],
  imports: [
    CommonModule
  ],
    exports:[FiltroPipe, FiltroMin]

})
export class PipesModule { }
