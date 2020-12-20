import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any [], texto: string): any [] {
    if (!arreglo){
      return [];
    }
    if (!texto){
      return arreglo;
    }
    return arreglo.filter(item => {
      return (item.name.toLowerCase().includes(texto.toLowerCase()) || item.nit.includes(texto.toLowerCase())
      );
    });
  }

}
@Pipe({
  name: 'minFilter'
})
export class FiltroMin implements PipeTransform {
  transform(arreglo: any [], minSpent: number): any [] {
    if (!arreglo){
      return [];
    }
    if (!minSpent){
      return arreglo;
    }
    return arreglo.filter(item => {
      return (item.totalspent >= minSpent
      );
    });
  }
}