import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit, OnChanges {

  constructor(private router: Router) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.stocks = this.llenado();
  }

  public stocks = [];

  llenado()
  {
    var objects = [];
    let ref = firebase.firestore().collection('Comida');
    ref.get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach(doc => {
          var vencimiento = this.fecha(doc.data().fecha_creacion);

          objects.push({nombre: doc.data().nombre, descripcion: doc.data().descripcion, proveedor: doc.data().proveedor,
            cantidad: doc.data().cantidad, precio: doc.data().precio, imagen: doc.data().imagen,
            fecha_creacion: vencimiento});
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
      console.log(objects);

    return objects;
  }

  anadir()
  {
    this.router.navigate(['/anadir']);
  }
  
  menu()
  {
    this.router.navigate(['/home']);
  }

  delete(producto, fecha_creacion)
  {
    var ref = firebase.firestore().collection('Comida');
    ref.where('nombre','==',producto).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          
          if(fecha_creacion == doc.data().fecha_creacion)
          ref.doc(doc.id).delete();
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    this.stocks = this.llenado();
  }

  editar( producto, cantidad)
  {
    console.log('Hola este es testClick ' + producto);
    firebase.database().ref('stock/' + cantidad+'/').update;
    this.stocks = this.llenado();
  }

  testClick(id,producto,cantidad,imagen)
  {
    console.log('Hola este es testClick ' + producto);
    firebase.database().ref('stock/').child(id).set({
      id: id,
      producto: producto,
      proveedor: 'Vacio',
      cantidad : cantidad,
      imagen: imagen
    });
  }

  fecha(fecha_creacion)
  {
    var f = new Date();
    /*var meses = new Array 
    ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");*/

    var fecha = fecha_creacion.split("_");
    var vencimiento;
    console.log(fecha[1]);
    if(f.getMonth() == fecha[1])//Durante el mismo mes
    {
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
      vencimiento = "Producto vencido";
    }

    return vencimiento;
  }

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
}