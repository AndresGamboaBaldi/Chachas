export interface Cliente
{
    nombre?: string;
    total?: number;
    fecha?: firebase.default.firestore.Timestamp,
    uid?:string;
    nit?:string;

}