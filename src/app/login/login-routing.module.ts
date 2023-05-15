import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginWrapperComponent } from "./login-wrapper/login-wrapper.component";
import { LoginComponent } from "./login-component/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FormIoLoginComponent } from "./form-io-login/form-io-login.component";
const routes: Routes = [
    {
        path: '', component: LoginWrapperComponent, children: [
          { path: '',pathMatch:'full', redirectTo: 'login' },
          {
            path: 'login', component: LoginComponent
          }, {
            path: 'signup', component: SignupComponent
          },
          {
            path: 'formiologin',component : FormIoLoginComponent
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