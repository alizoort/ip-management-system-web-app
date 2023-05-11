import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioResources } from '@formio/angular/resource';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppConfig } from './config';
import { FormioAppConfig, FormioModule } from '@formio/angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
