import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-component/login.component';
import { LoginWrapperComponent } from './login-wrapper/login-wrapper.component';
import { SignupComponent } from './signup/signup.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { FormIoLoginComponent } from './form-io-login/form-io-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginWrapperComponent,
    SignupComponent,
    FormIoLoginComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
