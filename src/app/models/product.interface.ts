export interface Product
{
    cantidad: number;
    descripcion?: string;
    descuento?: number;
    fecha_creacion: string;
    imagen?: string;
    nombre?:string;
    precio?:number;
    promocion?:boolean;
    rating?:number;
    sucursal: string;
}