import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard.guard';
const routes: Routes = [
   {path:'landing',loadChildren: ()=> import('./landing/landing.module').then(m=>m.LandingModule),canActivate:[AuthGuard]},
   {path: 'auth',loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule)},
   { path: '**', pathMatch: 'full', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
