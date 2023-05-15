import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioResources } from '@formio/angular/resource';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/modules/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
