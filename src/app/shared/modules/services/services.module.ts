import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';



@NgModule({
  declarations: [],
  imports: [
  ]
})
export class ServicesModule { 
  static forShared(): Provider[] {
    return [
     AuthService
    ];
  }
}
