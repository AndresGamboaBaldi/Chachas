import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-ingredientes-emp',
  templateUrl: './ingredientes-emp.page.html',
  styleUrls: ['./ingredientes-emp.page.scss'],
})
export class IngredientesEmpPage implements OnInit {

  constructor() { }
  
  public stocks = [];

  bisiesto(anio)
  {
    var aux = 0;
    var resp;

    while (aux != 5)
    {
      switch (aux)
      {
        case 0:
          {
            if(anio % 4 == 0)
            {
              aux = 1;
            }
            else{
              aux = 4;
            }
            break;
          }
        case 1:
          {
            if(anio % 100 == 0)
            {
              aux = 2;
            }
            else{
              aux = 3;
            }
            break;
          }
        case 2:
          {
            if(anio % 400 == 0)
            {
              aux = 3;
            }
            else{
              aux = 4;
            }
            break;
          }
        case 3:
          {
            aux = 5;
            resp = true;
            break;
          }
        case 4:
          {
            aux = 5;
            resp = false;
            break;
          }
      }
    }
    return resp;
  }
 
  fecha(fecha_creacion)
  {
    var f = new Date();
    /*var meses = new Array 
    ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");*/

    var fecha = fecha_creacion.split("_");
    var vencimiento;
    if(f.getMonth() == fecha[1])//Durante el mismo mes
    {
      console.log("Durante el mismo mes");
      if(f.getDate()-fecha[0]>3)
      {
        vencimiento = "Producto vencido";
      }
      else{
        vencimiento = f.getDate()-fecha[0];
      }
    }
    else if(((f.getMonth() == 11 && fecha[2] == 0) || (fecha[1] >= 0)) && (f.getFullYear() > fecha[2])) // Cambio de año
    {
      if((f.getDate()+31) - fecha[0] > 3)
      {
        vencimiento = "Producto vencido";
      }
      else{
        vencimiento = (f.getDate() + 31) - fecha[0];
      }
    }
    else if((f.getMonth() > fecha[1]) && (f.getMonth() != 1 && fecha[1] != 1)) //cambio de mes menos Febrero
    {
      if(fecha[1] % 2 == 0)
      {
        if((f.getDate()+30) - fecha[0] > 3)
        {
          vencimiento = "Producto vencido";
        }
        else{
          vencimiento = (f.getDate() + 30) - fecha[0];
        }
      }
      else{
        if((f.getDate()+31) - fecha[0] > 3)
        {
          vencimiento = "Producto vencido";
        }
        else{
          vencimiento = (f.getDate() + 31) - fecha[0];
        }
      }
    }
    else if((fecha[1] == 1) && (f.getMonth() == 2))//cambio de mes Febrero
    {
      if(this.bisiesto(fecha[2]))
      {
        if((f.getDate()+29) - fecha[0] > 3)
        {
          vencimiento = "Producto vencido";
        }
        else{
          vencimiento = (f.getDate() + 29) - fecha[0];
        }
      }
      else{
        if((f.getDate()+28) - fecha[0] > 3)
        {
          vencimiento = "Producto vencido";
        }
        else{
          vencimiento = (f.getDate() + 28) - fecha[0];
        }
      }
    }
    else{
      if(f.getDate()-fecha[0]>3)
      {
        vencimiento = "Producto vencido";
      }
      else{
        vencimiento = f.getDate()-fecha[0];
      }
    }

    return vencimiento;
  }

  
  llenado()
  {
    var objects = [];
    let ref = firebase.firestore().collection('Insumos');
    ref.get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        snapshot.forEach(doc => {

          objects.push({descripcion: doc.data().descripcion, img: doc.data().img, 
            insumo: doc.data().insumo, stock: doc.data().stock, stockMinimo: doc.data().stockMinimo, unidad: doc.data().unidad,
            });
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
      console.log(objects);

    return objects;
  }
  ngOnInit() {
    this.stocks = this.llenado();
  }

}
