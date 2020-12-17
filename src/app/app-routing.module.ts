import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule) },
  { path: '', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'accepted',
    loadChildren: () => import('./pages/accepted/accepted.module').then( m => m.AcceptedPageModule)
  },
  {
    path: 'finalized',
    loadChildren: () => import('./pages/finalized/finalized.module').then( m => m.FinalizedPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pages/pending/pending.module').then( m => m.PendingPageModule)
  },
  {
    path: 'rejected',
    loadChildren: () => import('./pages/rejected/rejected.module').then( m => m.RejectedPageModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./pages/supplier/supplier.module').then( m => m.SupplierPageModule)
  },
  {
    path: 'saleslist',
    loadChildren: () => import('./pages/saleslist/saleslist.module').then( m => m.SaleslistPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
