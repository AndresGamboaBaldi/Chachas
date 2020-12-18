import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'anadir',
    loadChildren: () => import('./anadir/anadir.module').then( m => m.AnadirPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'anadir-in',
    loadChildren: () => import('./anadir-in/anadir-in.module').then( m => m.AnadirInPageModule)
  },
  {
    path: 'home-receta',
    loadChildren: () => import('./home-receta/home-receta.module').then( m => m.HomeRecetaPageModule)
  },
  {
    path: 'ingredientes-ejq',
    loadChildren: () => import('./ingredientes-ejq/ingredientes-ejq.module').then( m => m.IngredientesEjqPageModule)
  },
  {
    path: 'ingredientes-emc',
    loadChildren: () => import('./ingredientes-emc/ingredientes-emc.module').then( m => m.IngredientesEmcPageModule)
  },
  {
    path: 'ingredientes-emp',
    loadChildren: () => import('./ingredientes-emp/ingredientes-emp.module').then( m => m.IngredientesEmpPageModule)
  },
  {
    path: 'ingredientes-emq',
    loadChildren: () => import('./ingredientes-emq/ingredientes-emq.module').then( m => m.IngredientesEmqPageModule)
  },
  {
    path: 'receta-ejq',
    loadChildren: () => import('./receta-ejq/receta-ejq.module').then( m => m.RecetaEjqPageModule)
  },
  {
    path: 'receta-emc',
    loadChildren: () => import('./receta-emc/receta-emc.module').then( m => m.RecetaEmcPageModule)
  },
  {
    path: 'receta-eq',
    loadChildren: () => import('./receta-eq/receta-eq.module').then( m => m.RecetaEqPageModule)
  },
  {
    path: 'receta-emp',
    loadChildren: () => import('./receta-emp/receta-emp.module').then( m => m.RecetaEmpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
