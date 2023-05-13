import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../interceptors/auth-interceptor';



@NgModule({
  declarations: [],
  imports: [

  ]
})
export class InterceptorsModule { 
  static forShared(): Provider[] {
    return [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ];
  }
}
