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
  },
  {
    path: 'clientrank',
    loadChildren: () => import('./pages/rankingclient/rankingclient.module').then( m => m.RankingclientPageModule)
  },
  {
    path: 'rankingclient',
    loadChildren: () => import('./pages/rankingclient/rankingclient.module').then( m => m.RankingclientPageModule)
  },
  {
    path: 'tabs-compras',
    loadChildren: () => import('./pages/tabs-compras/tabs-compras.module').then( m => m.TabsComprasPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./production/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./production/stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'anadir',
    loadChildren: () => import('./production/anadir/anadir.module').then( m => m.AnadirPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./production/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'anadir-in',
    loadChildren: () => import('./production/anadir-in/anadir-in.module').then( m => m.AnadirInPageModule)
  },
  {
    path: 'home-receta',
    loadChildren: () => import('./production/home-receta/home-receta.module').then( m => m.HomeRecetaPageModule)
  },
  {
    path: 'ingredientes-ejq',
    loadChildren: () => import('./production/ingredientes-ejq/ingredientes-ejq.module').then( m => m.IngredientesEjqPageModule)
  },
  {
    path: 'ingredientes-emc',
    loadChildren: () => import('./production/ingredientes-emc/ingredientes-emc.module').then( m => m.IngredientesEmcPageModule)
  },
  {
    path: 'ingredientes-emp',
    loadChildren: () => import('./production/ingredientes-emp/ingredientes-emp.module').then( m => m.IngredientesEmpPageModule)
  },
  {
    path: 'ingredientes-emq',
    loadChildren: () => import('./production/ingredientes-emq/ingredientes-emq.module').then( m => m.IngredientesEmqPageModule)
  },
  {
    path: 'receta-ejq',
    loadChildren: () => import('./production/receta-ejq/receta-ejq.module').then( m => m.RecetaEjqPageModule)
  },
  {
    path: 'receta-emc',
    loadChildren: () => import('./production/receta-emc/receta-emc.module').then( m => m.RecetaEmcPageModule)
  },
  {
    path: 'receta-eq',
    loadChildren: () => import('./production/receta-eq/receta-eq.module').then( m => m.RecetaEqPageModule)
  },
  {
    path: 'receta-emp',
    loadChildren: () => import('./production/receta-emp/receta-emp.module').then( m => m.RecetaEmpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./production/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./production/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
