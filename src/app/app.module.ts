import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioResources } from '@formio/angular/resource';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/modules/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
