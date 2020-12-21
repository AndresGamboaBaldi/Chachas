import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComprasPage } from './tabs-compras.page';

const routes: Routes = [
  {
    path: '',
    component: TabsComprasPage,
    children: [
      {
        path: 'ofertas',
        loadChildren: () => import('../../pages/pending/pending.module').then(pending=>pending.PendingPageModule)
      },
      {
        path: 'ofertasenproceso',
        loadChildren: () => import('../../pages/accepted/accepted.module').then(sucursal=>sucursal.AcceptedPageModule)
      },
      {
        path: 'ofertasrechazadas',
        loadChildren: () => import('../../pages/rejected/rejected.module').then( pedido => pedido.RejectedPageModule)
       },
      {
        path: 'historialdecompras',
        loadChildren: () => import('../../pages/finalized/finalized.module').then(m => m.FinalizedPageModule)
      },
      {
        path: 'proveedores',
        loadChildren: () => import('../../pages/supplier/supplier.module').then( m => m.SupplierPageModule)
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsComprasPageRoutingModule {}
