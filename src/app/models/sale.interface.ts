import { ILatLng } from './latlng.interface';
import { Product } from './product.interface';

export interface Sale {
   position : ILatLng,
   nombre: string,
   usuario: string,
   direccion : string,
   fechahorapedido: Date;
   telefono : number,
   productos : [
      {
         id: string,
         cantidad: number
      }
   ],
   nit : string,
   total : number
}