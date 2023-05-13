import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioResources } from '@formio/angular/resource';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './landing/home/home.component';
import { AppConfig } from './config';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { ConfigService } from './config.service';
import { LoginComponent } from './login/login-component/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { AuthGuard } from './shared/guards/auth-guard.guard';
import { AuthService } from './shared/services/auth.service';
import { LandingModule } from './landing/landing.module';
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
