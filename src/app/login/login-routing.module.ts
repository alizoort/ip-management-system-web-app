import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginWrapperComponent } from "./login-wrapper/login-wrapper.component";
import { LoginComponent } from "./login-component/login.component";
import { SignupComponent } from "./signup/signup.component";
const routes: Routes = [
    {
        path: '', component: LoginWrapperComponent, children: [
          { path: '', redirectTo: 'login' },
          {
            path: 'login', component: LoginComponent
          }, {
            path: 'signup', component: SignupComponent
          }
        ]
      }  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
    
}