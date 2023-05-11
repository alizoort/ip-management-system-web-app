import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioResources } from '@formio/angular/resource';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppConfig } from './config';
import { FormioAppConfig } from '@formio/angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [   {provide: FormioAppConfig, useValue: AppConfig},
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
